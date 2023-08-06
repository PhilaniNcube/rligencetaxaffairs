import { getBlogArticles } from "@/sanity/sanity-utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog | Rligence Tax Services",
  description:
    "The Rligence Tax Services blog is a great resource for tax news, tips, and advice. We cover a wide range of topics, from tax law changes to tax planning strategies.",
  keywords:
    "tax preparation, tax planning, tax consulting, tax services, tax accountants, tax professionals",
  authors: [
    {
      name: "Rligence Tax Services",
      url: "https://rligencetaxservices.co.za/blog",
    },
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://rligencetaxservices.co.za/blog",
    title: "Blog | Rligence Tax Services",
    description:
      "The Rligence Tax Services blog is a great resource for tax news, tips, and advice. We cover a wide range of topics, from tax law changes to tax planning strategies.",
    images: [
      {
        url: "https://rligencetaxaffairs.vercel.app/_next/image?url=%2Fimages%2Fcropped-logo.png&w=2048&q=75",
      },
    ],
  },
  category: "Accounting And Taxation",
};

const page = async () => {

  const articles = await getBlogArticles()


  return (
    <main className="bg-slate-800 text-white">
      <div className="container py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2  gap-4">
          {articles.map((article) => (
            <article
              key={article._id}
              className="first:lg:col-span-2 first:lg:row-span-2 rounded-md @container overflow-clip flex flex-col"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={1920}
                height={1080}
                className="w-full object-cover aspect-video"
              />
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <h2 className="text-md text-slate-800 line-clamp-1 @sm:line-clamp-2 @sm:text-lg @md:text-4xl  font-bold">
                  {article.title}
                </h2>
                <Link href={`/blog/${article.slug}`}>
                  <Button type="button" className="rounded-none bg-amber-500 text-slate-800 hover:text-white">Read More</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
export default page;
