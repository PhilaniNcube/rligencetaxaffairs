import { createClient, groq } from "next-sanity";
import { Blog } from "./types";

  const client = createClient({
     projectId: 'ohba0p76',
  dataset: 'production',
  apiVersion: '2023-08-04',
  })

  const getBlogArticles = async (): Promise<Blog[]> => {
      return await client.fetch(
    groq`*[_type == "blog"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  )
  }


  const getBlogArticle = async (slug: string): Promise<Blog> => {
      return await client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    {slug}
  )
  }


  const getRelatedArticles = async (slug: string): Promise<Blog[]> => {
      return await client.fetch(
    groq`*[_type == "blog" && slug.current != $slug]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    {slug}
  )
  }

  export { getBlogArticles, getBlogArticle, getRelatedArticles }
