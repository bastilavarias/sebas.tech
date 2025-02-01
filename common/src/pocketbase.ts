// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import PocketBase from "pocketbase";

export type Article = {
  id: number;
  category: string[];
  author: string;
  title: string;
  slug: string;
  content: string;
  conclusion: string;
  featured: boolean;
  draft: false;
  date_posted: string;
  created: string;
  updated: string;
};

export const pb = new PocketBase(import.meta.env.BACKEND_URL);

await pb.admins.authWithPassword(
  import.meta.env.BACKEND_EMAIL,
  import.meta.env.BACKEND_PASSWORD
);
