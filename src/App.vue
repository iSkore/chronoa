<template>
    <v-app>
        <SystemBar/>

        <v-main>
            <v-container fluid ma-0 pa-0>
                <router-view></router-view>
            </v-container>
        </v-main>

        <SettingsSheet/>
        <Footer/>
    </v-app>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import SystemBar     from './components/SystemBar';
import SettingsSheet from './components/SettingsSheet';
import Footer        from './components/Footer';

export default {
    name: 'App',
    components: {
        SystemBar,
        SettingsSheet,
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
        this.$installEvents();
        this.$installLogger();
    },
    async mounted() {
        await this.getConfig();
        this.initiateGlobalTimeInterval();
    },
    methods: {
        ...mapActions( [ 'getConfig' ] ),
        ...mapMutations( [ 'initiateGlobalTimeInterval' ] )
    }
};
</script>

<style>
html, body {
    overflow: hidden;
}
</style>
