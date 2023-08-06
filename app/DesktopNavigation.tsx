"use client"

import LeadForm from "@/components/Leads/LeadForm";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavProps = {
  links: {
    name: string;
    href: string;
  }[]
}

const DesktopNavigation = ({ links }: NavProps) => {

  const pathname = usePathname()

  return (
    <div className="hidden md:flex items-center w-full justify-between py-2">
      <div className="flex flex-1 items-center">
        <Link href="/">
          <Image
            src="/images/cropped-logo.png"
            width={1930}
            height={670}
            alt="Logo"
            className="w-44 object-cover"
          />
        </Link>
        <div className="ml-5 flex items-center space-x-7">
          {links.map((link) => {

            const isActive = pathname === link.href

           return (
             <Link
               className={cn("text-white text-sm md:text-md hover:text-slate-300",
                 isActive ? "text-slate-200" : ""
               )}
               href={link.href}
               key={link.name}
             >
               {link.name}
             </Link>
           );
          })}
        </div>
      </div>

     <LeadForm />
    </div>
  );
};
export default DesktopNavigation;
