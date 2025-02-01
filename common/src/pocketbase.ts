// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8080");

await pb.admins.authWithPassword(
  "sebastiancurtislavarias@gmail.com",
  "#VueVechain052100"
);
