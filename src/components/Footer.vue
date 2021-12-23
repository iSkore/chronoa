<template>
    <v-footer
        class="pt-0 pb-0"
        height="64"
    >
        <v-row>
            <v-col cols="2">
                <v-btn
                    icon
                    @click="switchTimer()"
                >
                    <v-icon v-if="$store.state.timeRunning">mdi-pause</v-icon>
                    <v-icon v-else>mdi-play</v-icon>
                </v-btn>
            </v-col>

            <v-col cols="2" offset="6">
                <v-btn icon>
                    <v-icon>mdi-restart</v-icon>
                </v-btn>
            </v-col>

            <v-col cols="2">
                <v-btn icon>
                    <v-icon>mdi-cog</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'Footer',
    data() {
        return {
            version: `v${ process.env.VUE_APP_VERSION }`,
            repoUrl: process.env.VUE_APP_REPOSITORY || '/'
        };
    },
    computed: {
        ...mapState( [ 'footer' ] )
    },
    methods: {
        ...mapMutations( [ 'switchTimer' ] )
    }
};
</script>
