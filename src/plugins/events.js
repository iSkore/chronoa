import Vue from 'vue';

import { EventEmitter } from 'events';

Vue.use( {
    install() {
        Vue.prototype.$eventBus = new EventEmitter();

        Vue.prototype.$installEvents = function() {
            this.$store.$eventBus = Vue.prototype.$eventBus;
        };
    }
} );
