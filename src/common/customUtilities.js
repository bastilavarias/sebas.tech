export default {
  methods: {
    truncateText(string) {
      const truncatedString = string.slice(0, 65);
      return truncatedString
        ? `${truncatedString}...`
        : "Something went wrong.";
    }
  }
};
