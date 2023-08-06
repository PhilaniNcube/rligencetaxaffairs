import { createClient, groq } from "next-sanity";
// import { Article } from "./types";

  const client = createClient({
    projectId: "anh1uho1",
    dataset: "production",
    apiVersion: "2023-07-31",

  })
