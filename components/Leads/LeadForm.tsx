"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Separator } from "../ui/separator";
import { Database } from "@/schema";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const PropertyInvestorSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Please enter a valid phone number.",
    })
    .max(10, {
      message: "Please enter a valid phone number.",
    }),
  realestate: z.literal(true),
  number_of_properties: z.number(),
  individual_capacity: z.enum(["individual", "pty"]),
  paid_off: z.boolean(),
  financials_done: z.boolean(),
  sars_rep: z.boolean(),
  comments: z.string(),
});

const IndividualSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Please enter a valid phone number.",
    })
    .max(10, {
      message: "Please enter a valid phone number.",
    }),
  realestate: z.literal(false),
  salaried: z.boolean(),
  retirement_contributions: z.boolean(),
  investments: z.boolean(),
  medical_aid: z.boolean(),
  tax_free_investments: z.boolean(),
  home_office: z.boolean(),
  comments: z.string(),
});

const FormSchema = z.discriminatedUnion("realestate", [
  PropertyInvestorSchema,
  IndividualSchema,
]);

type FormSchemaType = z.infer<typeof FormSchema>;

const LeadForm = () => {

    const { toast } = useToast();

  const supabase = createClientComponentClient<Database>();

  const searchParams = useSearchParams();

  const code = searchParams.get("code") || "";

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      realestate: false,
      salaried: false,
      retirement_contributions: false,
      investments: false,
      medical_aid: false,
      tax_free_investments: false,
      home_office: false,

    }
  })

  const { handleSubmit, register, formState, watch } = form;

  const realEstate = watch("realestate");

  console.log(formState.errors);
  async function submitForm(data: z.infer<typeof FormSchema>) {
    console.log(formState.errors);
    console.log(data)
    if(data.realestate === true) {


     let { number_of_properties, sars_rep, paid_off, financials_done, comments, first_name, last_name, email, phone, realestate } = data;

     const { data: lead, error } = await supabase
       .from("leads")
       .insert([
         {
           first_name,
           last_name,
           email,
           phone,
           number_of_properties,
           sars_rep,
           paid_off,
           financials_done,
           comments,
           realestate,
           referral_code: code,
         },
       ])


       console.log({lead, error})

       if(error) {
        toast({
          title: "Error",
          description: "Something went wrong, please try again later.",
        })
       }  else {
        toast({
          title: "Success",
          description: "Your information has been saved in our database. We will be in touch shortly.",
        })
       }

    } else {

      console.log(data);

      let { salaried, retirement_contributions, investments, medical_aid, tax_free_investments, home_office, comments, first_name, last_name, email, phone, realestate } = data;


      const { data: lead, error:individualError } = await supabase.from("leads").insert([{
        first_name,
        last_name,
        email,
        phone,
        salaried,
        retirement_contributions,
        investments,
        medical_aid,
        tax_free_investments,
        home_office,
        comments,
        realestate,
        referral_code: code
      }])

      console.log({lead, individualError})


       if (individualError) {
         toast({
           title: "Error",
           description: "Something went wrong, please try again later.",
         });
       } else {
         toast({
           title: "Success",
           description:
             "Your information has been saved in our database. We will be in touch shortly.",
         });
       }

    }

    console.log(formState)

  }


  return (
    <Dialog>
      <DialogTrigger>
        <Button
          type="button"
          className="rounded-none bg-orange-300 text-black hover:text-white"
        >
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[700px] gap-2">
        <DialogHeader className="">
          <DialogTitle>Tell us about yourself.</DialogTitle>
          <DialogDescription className="text-xs ">
            Fill in the form and click save when you are done, so we can get to
            know your needs a little better and we can schedule a consultation.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] py-1">
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(submitForm)}
                className="w-full @container"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 @sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 @sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="0817551279" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                <Separator className="my-4" />
                <div>
                  {/***Render the checkbox to see if lead is a real eastate investor or not */}
                  <FormField
                    control={form.control}
                    name="realestate"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Are you a real estate investor?</FormLabel>
                          <FormDescription>
                            Do you own any real estate investments in South
                            Africa?
                            {/* <Link href="/examples/forms">mobile settings</Link>{" "} */}
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  {/***Render the form for real estate investors */}
                  {realEstate ? (
                    <div className="w-full border border-slate-200 p-2 rounded-md mt-2 bg-slate-200">
                      <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            defaultValue={1}
                            control={form.control}
                            name="number_of_properties"
                            render={({ field }) => (
                              <FormItem
                                {...register("number_of_properties", {
                                  shouldUnregister: true,
                                })}
                              >
                                <FormLabel>How many properties?</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder=""
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-xs text-red-400" />
                              </FormItem>
                            )}
                          />
                          <div className="col-span-1 md:col-span-2">
                            <FormField
                              defaultValue="individual"
                              control={form.control}
                              name="individual_capacity"
                              render={({ field }) => (
                                <FormItem
                                  {...register("individual_capacity", {
                                    shouldUnregister: true,
                                  })}
                                >
                                  <FormLabel>
                                    In what capacity do you own these
                                    properties?
                                  </FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className="bg-white">
                                        <SelectValue placeholder="Make a selection" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="individual">
                                        Individual
                                      </SelectItem>
                                      <SelectItem value="pty">PTY</SelectItem>
                                    </SelectContent>
                                  </Select>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1">
                          <FormField
                            defaultValue={false}
                            control={form.control}
                            name="paid_off"
                            render={({ field }) => (
                              <FormItem
                                {...register("paid_off", {
                                  shouldUnregister: true,
                                })}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    Are the properties fully paid off or under
                                    mortgage?
                                  </FormLabel>
                                  <FormDescription>
                                    Are you still paying off a bond on any of
                                    the properties?
                                    {/* <Link href="/examples/forms">mobile settings</Link>{" "} */}
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                          <FormField
                            defaultValue={false}
                            control={form.control}
                            name="financials_done"
                            render={({ field }) => (
                              <FormItem
                                {...register("financials_done", {
                                  shouldUnregister: true,
                                })}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    Have company financials been done?
                                  </FormLabel>
                                  <FormDescription>
                                    If properties are owned individually, leave
                                    empty.
                                    {/* <Link href="/examples/forms">mobile settings</Link>{" "} */}
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                          <FormField
                            defaultValue={false}
                            control={form.control}
                            name="sars_rep"
                            render={({ field }) => (
                              <FormItem
                                {...register("sars_rep", {
                                  shouldUnregister: true,
                                })}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    Does the company have SARS registered
                                    representative?
                                  </FormLabel>
                                  <FormDescription>
                                    If properties are owned individually, leave
                                    empty.
                                    {/* <Link href="/examples/forms">mobile settings</Link>{" "} */}
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full border border-slate-200 p-2 rounded-md mt-2 bg-slate-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          defaultValue={false}
                          control={form.control}
                          name="salaried"
                          render={({ field }) => (
                            <FormItem
                              {...register("salaried", {
                                shouldUnregister: true,
                              })}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Are you a salaried earner</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          defaultValue={false}
                          control={form.control}
                          name="retirement_contributions"
                          render={({ field }) => (
                            <FormItem
                              {...register("retirement_contributions", {
                                shouldUnregister: true,
                              })}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Do you make Retirement contributions?
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          defaultValue={false}
                          control={form.control}
                          name="investments"
                          render={({ field }) => (
                            <FormItem
                              {...register("investments", {
                                shouldUnregister: true,
                              })}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Do yu have other investments
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          defaultValue={false}
                          control={form.control}
                          name="medical_aid"
                          render={({ field }) => (
                            <FormItem
                              {...register("medical_aid", {
                                shouldUnregister: true,
                              })}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Do you have medical aid contributions?
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          defaultValue={false}
                          control={form.control}
                          name="tax_free_investments"
                          render={({ field }) => (
                            <FormItem
                              {...register("tax_free_investments", {
                                shouldUnregister: true,
                              })}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Do yoy have Tax-free investments?
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          defaultValue={false}
                          control={form.control}
                          name="home_office"
                          render={({ field }) => (
                            <FormItem
                              {...register("home_office", {
                                shouldUnregister: true,
                              })}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Do you have home office expenses?
                                </FormLabel>
                                <FormMessage/>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <Separator className="my-4" />
                <div className="w-full pb-2">
                  {" "}
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Comments</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Additional comments"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-slate-700 text-white rounded-none"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
export default LeadForm;
