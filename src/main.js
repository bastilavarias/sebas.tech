import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import DefaultLayout from "~/layouts/Default.vue";
import colors from "vuetify/es5/util/colors";

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
  });
  const opts = {
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  };
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);
  Vue.component("Layout", DefaultLayout);
}
