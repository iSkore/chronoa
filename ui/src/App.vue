<template>
    <v-app>
        <SystemBar/>

        <v-main>
            <v-container fluid ma-0 pa-0>
                <router-view></router-view>
            </v-container>
        </v-main>

        <Footer/>
    </v-app>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import SystemBar from './components/SystemBar';
import Footer    from './components/Footer';

export default {
    name: 'App',
    components: {
        SystemBar,
        Footer
    },
    metaInfo() {
        return {
            title: process.env.VUE_APP_TITLE,
            description: process.env.VUE_APP_DESCRIPTION
        };
    },
    data() {
        return {};
    },
    beforeCreate() {
        this.$installAudio();
        this.$installAxios();
        this.$installLogger();
    },
    async mounted() {
        await this.getConfig();

        this.$store.state.globalTimeInterval = setInterval( () => {
            this.$store.state.globalTime = Date.now();
            this.updateTime( this.$store.state.globalTime );
        }, this.$store.state.globalTimeIntervalMilliseconds );
    },
    methods: {
        ...mapActions( [ 'getConfig' ] ),
        ...mapMutations( [ 'updateTime' ] )
    }
};
</script>

<style>
html, body {
    overflow: hidden;
}
</style>
