import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FCF7F6',
                secondary: '#F5F7F9',
            },
        },
    },
});

export default vuetify;
