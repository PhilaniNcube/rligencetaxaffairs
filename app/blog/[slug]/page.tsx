import { Separator } from "@/components/ui/separator";
import { getBlogArticle, getRelatedArticles } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

const page = async ({params: {slug}}:{params: {slug:string}}) => {

  const article = await getBlogArticle(slug)
  const relatedArticles = await getRelatedArticles(slug);

  return (
    <main className="bg-slate-800 text-white">
      <div className="container py-10 flex items-start gap-4">
        <article className="flex-1">
          <Image
            src={article.image}
            alt={article.title}
            width={1920}
            height={1080}
            className="w-full aspect-video object-cover"
          />
          <h1 className="text-lg md:text-xl lg:text-2xl my-2 font-bold">
            {article.title}
          </h1>
          <Separator className="my-4" />
          <div className="w-full ">
            <PortableText value={article.content} />
          </div>
        </article>
        <aside className="hidden lg:flex flex-col w-[300px]">
          <h2 className="text-lg font-bold text-white">Other Blog Articles</h2>
          <Separator className="my-4" />
          {relatedArticles.map((article) => (
            <Link
              key={article._id}
              href={`/blog/${article.slug}`}
              className="line-clamp-1 text-xs text-white mb-3 font-medium flex flex-col"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={200}
                className="w-full aspect-auto object-cover"
              />
              <p className="mt-1 text-md line-clamp-2">{article.title}</p>
            </Link>
          ))}
        </aside>
      </div>
    </main>
  );
};
export default page;
