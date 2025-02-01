import { pb } from "../../pocketbase";

const siteInformation = {
  async get() {
    try {
      return await pb.collection("site_information").getFirstListItem();
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async list() {
    try {
      return await pb.collection("site_information").getFullList();
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default siteInformation;
