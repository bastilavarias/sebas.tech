import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9A8D84',
                secondary: '#1F7546',
            },
        },
    },
});

export default vuetify;
