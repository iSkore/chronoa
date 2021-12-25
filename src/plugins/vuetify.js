import Vue     from 'vue';
import Vuetify from 'vuetify/lib';

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.use( Vuetify );

export default new Vuetify( {
    iconfont: 'mdi',
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#ff9800',
                secondary: '#ff5722',
                accent: '#8bc34a',
                error: '#f44336',
                warning: '#cddc39',
                info: '#03a9f4',
                success: '#4caf50'
            }
        }
    }
} );
