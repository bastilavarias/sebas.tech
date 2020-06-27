export default {
  methods: {
    truncateText(string) {
      const truncatedString = string.slice(0, 50);
      return truncatedString && truncatedString.length >= 50
        ? `${truncatedString}...`
        : truncatedString;
    },

    redirectBlank(url) {
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = url;
      a.click();
    }
  },

  computed: {
    isDayTime() {
      const hours = new Date().getHours();
      return hours > 6 && hours < 18;
    }
  }
};
