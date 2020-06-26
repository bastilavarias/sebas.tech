export default {
  methods: {
    truncateText(string) {
      const truncatedString = string.slice(0, 50);
      return truncatedString && truncatedString.length >= 50
        ? `${truncatedString}...`
        : truncatedString;
    }
  }
};
