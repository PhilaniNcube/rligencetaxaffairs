import Section from "@/components/Home/Section";
import Hero from "./Hero";
import About from "@/components/Home/About";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Rligence Tax Services | Tax Preparation and Planning",
  description:
    "Rligence Tax Services is a full-service tax preparation and planning firm that helps individuals and businesses save money on their taxes. We offer a wide range of services, including tax preparation, planning, and consulting.",
  keywords:
    "tax preparation, tax planning, tax consulting, tax services, tax accountants, tax professionals",
  authors: [
    {
      name: "Rligence Tax Services",
      url: "https://rligencetaxservices.co.za",
    },
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://rligencetaxservices.co.za",
    title: "Rligence Tax Services | Tax Preparation and Planning",
    description:
      "Rligence Tax Services is a full-service tax preparation and planning firm that helps individuals and businesses save money on their taxes. We offer a wide range of services, including tax preparation, planning, and consulting.",
    images: [
      {
        url: "https://rligencetaxaffairs.vercel.app/_next/image?url=%2Fimages%2Fcropped-logo.png&w=2048&q=75",
      },
    ],
  },
 category: "Accounting And Taxation",
};

const page = () => {
  return <main>
    <Hero />
    <Section />
    <About />
  </main>;
};
export default page;
