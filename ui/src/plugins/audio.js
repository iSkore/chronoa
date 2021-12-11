import Vue from 'vue';

Vue.use( {
    install() {
        Vue.prototype.$audio = {
            beep: new Audio( '/audio/beep.mp3' )
        };

        Vue.prototype.$installAudio = function() {
            this.$store.$audio = Vue.prototype.$audio;
        };
    }
} );
