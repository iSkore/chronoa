<template>
    <v-row class="ma-0 pa-0">
        <v-col cols="12" class="ma-0 pa-0">
            <v-card
                class="mx-0"
            >
                <v-system-bar lights-out></v-system-bar>
                <v-carousel
                    :cycle="cycle"
                    show-arrows-on-hover
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    height="40vh"
                >
                    <v-carousel-item>
                        <v-sheet height="100%" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <StopWatchTimer/>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>

                <v-divider class="my-5"></v-divider>

                <v-list two-line>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                            <v-list-item-subtitle>Author</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-switch
                                v-model="cycle"
                                label="Cycle Slides"
                                inset
                            ></v-switch>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import StopWatchTimer from '../components/timers/StopWatchTimer';
// import CountDownTimer from '../components/timers/CountDownTimer';

export default {
    name: 'Home',
    components: { StopWatchTimer },
    data() {
        return {
            // selectedComponent
            // cycle: false
            vCycle: false,
            get cycle() {
                return this.vCycle;
            },
            set cycle( val ) {
                this.vCycle = val;
            }
        };
    },
    mounted() {
    }
};
</script>
