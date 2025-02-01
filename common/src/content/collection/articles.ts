import { pb } from "../../pocketbase";
import type { Article } from "../../pocketbase";

const articles = {
  async list(): Promise<Article[]> {
    try {
      return await pb.collection("articles").getFullList();
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async get(slug: string): Promise<Article | null> {
    try {
      return await pb.collection("articles").getFirstListItem(`slug="${slug}"`);
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default articles;
