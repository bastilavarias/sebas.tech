import moment from "moment";

const commonUtility = {
  methods: {
    formatDate(date) {
      return moment(date).format("MMM Do YY");
    }
  }
};

export default commonUtility;
