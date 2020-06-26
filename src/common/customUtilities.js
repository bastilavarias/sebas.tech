export default {
  methods: {
    truncateText(string) {
      const truncatedString = string.slice(0, 50);
      return truncatedString && truncatedString.length >= 50
        ? `${truncatedString}...`
        : truncatedString;
    }
  },

  computed: {
    isDayTime() {
      const hours = new Date().getHours();
      return hours > 6 && hours < 18;
    }
  }
};
