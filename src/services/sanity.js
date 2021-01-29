const sanityClient = require("@sanity/client");

const sanityService = sanityClient({
  projectId: "vxusqfdf",
  dataset: "production"
});

export default sanityService;
