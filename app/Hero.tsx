import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full md:min-h-min md:h-[calc(100vh-100px)] bg-slate-600">
      <div className="container py-10 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6">
          <div className="flex flex-col justify-center w-full h-full">
            <h1 className="font-sans text-white text-2xl md:text-4xl font-semibold uppercase">
              Helping Individuals and Businesses Optimize Their Tax Strategy
            </h1>
            <Link href="/tax-savings" className="mt-4">
              <Button type="button" className="bg-orange-300 rounded-none text-black hover:text-white">
                Unlock Your Tax Savings!
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
          <Image src="/images/business.jpg" width={640} height={430} alt="Business" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
