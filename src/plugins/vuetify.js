import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FCF7F6',
                secondary: '#9A8D84',
            },
        },
    },
});

export default vuetify;
