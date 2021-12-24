<template>
    <v-row>
        <v-col cols="2">
            <v-btn
                icon
                @click="toggleTimeRunning()"
            >
                <v-icon v-if="$store.state.globalTimeRunning">mdi-pause</v-icon>
                <v-icon v-else>mdi-play</v-icon>
            </v-btn>
        </v-col>

        <v-col cols="2" offset="6">
            <v-btn
                icon
                @click="resetTime()"
            >
                <v-icon>mdi-restart</v-icon>
            </v-btn>
        </v-col>

        <v-col cols="2">
            <v-btn
                icon
                @click="$store.state.settingsSheet.model = !$store.state.settingsSheet.model"
            >
                <v-icon>mdi-cog</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'StopWatchTimerFooter',
    computed: {
        ...mapState( [ 'footer' ] )
    },
    methods: {
        ...mapMutations( [ 'toggleTimeRunning', 'resetTime' ] )
    }
};
</script>
