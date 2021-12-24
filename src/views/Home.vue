<template>
    <v-row class="ma-0 pa-0">
        <v-col cols="12" class="ma-0 pa-0">
            <v-carousel
                v-model="activeItem"
                show-arrows-on-hover
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="50vh"
            >
                <v-carousel-item
                    v-for="( val, i ) in components"
                    :key="`item-${ i }`"
                >
                    <v-sheet height="100%" tile>
                        <v-row class="fill-height" align="center" justify="center">
                            <component v-bind:is="val"></component>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>

            <v-divider class="my-5"></v-divider>

            <v-carousel
                v-model="activeItem"
                show-arrows-on-hover
                hide-delimiters
                delimiter-icon="mdi-minus"
                height="20vh"
            >
                <v-carousel-item
                    v-for="( val, i ) in components"
                    :key="`item-${ i }`"
                >
                    <v-sheet height="100%" tile>
                        <v-row class="fill-height" align="center" justify="center">
                            <v-list two-line>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>John Leider</v-list-item-title>
                                        <v-list-item-subtitle>Author</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-switch
                                            label="Speak time on the minute"
                                            inset
                                            disabled
                                        ></v-switch>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>

<script>
import StopWatchTimer   from '../components/timers/StopWatchTimer';
import CountDownTimer   from '../components/timers/CountDownTimer';
import { mapMutations } from 'vuex';

export default {
    name: 'Home',
    components: {
        StopWatchTimer,
        CountDownTimer
    },
    data() {
        const setSelectedComponent = this.setSelectedComponent;
        return {
            components: [
                StopWatchTimer,
                CountDownTimer
            ],
            vActiveItem: false,
            get activeItem() {
                return this.vActiveItem;
            },
            set activeItem( val ) {
                setSelectedComponent( this.components[ val ] );
                this.vActiveItem = val;
            }
        };
    },
    methods: {
        ...mapMutations( [ 'setSelectedComponent' ] )
    }
};
</script>
