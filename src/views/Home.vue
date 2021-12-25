<template>
    <v-carousel
        v-model="$store.state.activeTimerComponent"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
    >
        <v-carousel-item>
            <v-sheet height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                    <StopWatchTimer/>
                </v-row>
            </v-sheet>
        </v-carousel-item>

        <v-carousel-item>
            <v-sheet height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                    <v-col cols="12">
                        <CustomTimer/>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import StopWatchTimer from '../components/timers/StopWatchTimer';
import CustomTimer    from '../components/timers/CustomTimer';

export default {
    name: 'Home',
    components: {
        StopWatchTimer,
        CustomTimer
    }
};
</script>
