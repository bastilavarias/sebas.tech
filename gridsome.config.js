module.exports = {
  siteName: "Sebastian Lavarias",

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {}
      }
    }
  ],

  transformers: {
    remark: {}
  }
};
