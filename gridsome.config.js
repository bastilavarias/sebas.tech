module.exports = {
  siteName: "Sebastian Curtis T. Lavarias",

  siteUrl: "https://bastilavarias.github.io",

  pathPrefix: "/bastilavarias.github.io",

  icon: "src/favicon.png",

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blogs/**/*.md",
        typeName: "Blog",
        remark: {}
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  }
};
