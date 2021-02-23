import moment from "moment";

const commonUtility = {
  methods: {
    formatDate(date) {
      return moment(new Date(date)).format("MMM Do YY");
    }
  }
};

export default commonUtility;
