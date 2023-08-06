import { HomeIcon, User, Users2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Section = () => {

  const onSubmit = async (formData:FormData) => {
    "use server"

    const name = formData.get("name")
    const email = formData.get("email")
    const company_type = formData.get("company_type")

    if (typeof company_type !== "string" || typeof name !== "string" || typeof email !== "string") {
      throw new Error("Invalid form data")
      return
    }

    console.log({ name, email, company_type })

    }


  return (
    <section>
      <div className="py-10 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-start space-x-4">
              <span className="bg-slate-600 text-white rounded-full p-2">
                <HomeIcon size={20} className="w-10 h-10" />
              </span>
              <div className="w-full">
                <p className="text-md font-medium">Tax for Real Estate</p>
                <Link href="/realestate">
                  <Button
                    type="button"
                    className="bg-slate-700 rounded-none text-xs"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-4">
              <span className="bg-slate-600 text-white rounded-full p-2">
                <User size={20} className="w-10 h-10" />
              </span>
              <div className="w-full">
                <p className="text-md font-medium">Tax for Individuals</p>
                <Link href="/individuals-tax">
                  <Button
                    type="button"
                    className="bg-slate-700 rounded-none text-xs"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-600">
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  We would love to get in touch so we can hopefully save you
                  money on your taxes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={onSubmit}>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input name="name" id="name" type="text" />
                  </div>
                  <div className="flex flex-col space-y-1 mt-4">
                    <Label htmlFor="email">
                      Email <span className="text-red-600">*</span>
                    </Label>
                    <Input name="email" id="email" type="email" required />
                  </div>
                  <div className="flex flex-col space-y-1 mt-4">
                    <Select name="company_type">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Company Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="CC">Closed Corporation</SelectItem>
                        <SelectItem value="Private">Private Company</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1 mt-4">
                    <Button
                      type="submit"
                      className="bg-slate-700 text-white rounded-none"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;
