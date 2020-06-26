module.exports = {
  siteName: "Sebastian Lavarias",

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
