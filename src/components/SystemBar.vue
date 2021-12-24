<template>
    <v-system-bar
        :height="height"
        color="primary"
        app
    >
        <v-row>
            <v-col
                cols="8"
                offset="1"
            >
                <span class="overline text-center black--text font-weight-bold">
                    {{ centerTime }}
                </span>
            </v-col>

            <v-col cols="1">
                <v-btn
                    :height="height"
                    width="30"
                    tile icon x-small
                    aria-label="invert-colors"
                    @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
                >
                    <v-icon>mdi-invert-colors</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="2">
                <v-btn
                    :height="height"
                    width="30"
                    tile icon x-small
                    aria-label="app-version"
                    :href="repoUrl"
                >
                    {{ version }}
                </v-btn>
            </v-col>
        </v-row>
    </v-system-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import moment                     from 'moment';

export default {
    name: 'SystemBar',
    data() {
        return {
            height: '30',
            version: `v${ process.env.VUE_APP_VERSION }`,
            repoUrl: process.env.VUE_APP_REPOSITORY || '/'
        };
    },
    computed: {
        ...mapState( [ 'footer' ] ),
        centerTime() {
            return moment( this.$store.state.globalTime ).format( 'D MMM YYYY, HH:mm:ss' );
        }
    },
    methods: {
        ...mapMutations( [ 'toggleTimeRunning' ] )
    }
};
</script>
