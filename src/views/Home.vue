<template>
    <v-carousel
        v-model="$store.state.activeTimerComponent"
        show-arrows-on-hover
        hide-delimiter-background
        delimiter-icon="mdi-minus"
    >
        <v-carousel-item>
            <v-sheet height="100%" tile color="red">
                <v-row class="fill-height" align="center" justify="center">
                    <StopWatchTimer/>
                </v-row>
            </v-sheet>
        </v-carousel-item>

        <v-carousel-item>
            <v-sheet height="100%" tile color="red">
                <v-row class="fill-height" align="center" justify="center">
                    <CountDownTimer/>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import StopWatchTimer from '../components/timers/StopWatchTimer';
import CountDownTimer from '../components/timers/CountDownTimer';

export default {
    name: 'Home',
    components: {
        StopWatchTimer,
        CountDownTimer
    }
};
</script>
