<template>
    <v-dialog
        v-model="$store.state.clock.open"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card class="ma-0 pa-0 overflow-hidden">
            <v-toolbar color="primary">
                <v-btn
                    icon
                    dark
                    @click="$store.state.clock.open = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ $store.state.clock.title }}</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>

            <v-subheader>{{ $store.state.clock.description }}</v-subheader>

            <v-divider></v-divider>

            <v-row>
                <v-col cols="12" class="text-right pr-5">
                    <div
                        class="text-h4 font-weight-thin"
                    >
                        {{ $store.state.clock.phaseText }}
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="text-center mt-5 mb-5">
                    <div
                        class="text-h1 font-weight-bold"
                    >
                        {{ formattedTime }}
                    </div>
                </v-col>
            </v-row>

            <v-divider class="ma-5"></v-divider>

            <v-row>
                <v-col cols="6" class="text-center">
                    <div class="text-h5">sets</div>
                </v-col>
                <v-col cols="6" class="text-center">
                    <div class="text-h5">circut</div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="6" class="text-center">
                    <div class="text-h3 font-weight-regular">
                        {{ $store.state.clock.sets }}
                    </div>
                </v-col>
                <v-col cols="6" class="text-center">
                    <div class="text-h3 font-weight-regular">
                        {{ $store.state.clock.circut }}
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="text-center">
                    <div class="text-h5">total time</div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="text-center">
                    <div class="text-h3 font-weight-regular">
                        {{ $store.state.clock.totalTime }}
                    </div>
                </v-col>
            </v-row>

            <v-footer
                app
                height="64px"
            >
                <v-row>
                    <v-col cols="2">
                        <v-btn
                            icon
                        >
                            <v-icon v-if="$store.state.globalTimeRunning">mdi-pause</v-icon>
                            <v-icon v-else>mdi-play</v-icon>
                        </v-btn>
                    </v-col>

                    <v-col cols="2" offset="8">
                        <v-btn
                            icon
                        >
                            <v-icon>mdi-restart</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-footer>
        </v-card>
    </v-dialog>
</template>

<script>
import moment from 'moment';

export default {
    name: 'Clock',
    data() {
        return {};
    },
    mounted() {
        console.log( 'mounted' );
    },
    computed: {
        formattedTime() {
            let time = moment( this.$store.state.clock.deltaTimeStamp );

            // if deltaTimeStamp is over an hour, remove milliseconds
            if ( this.$store.state.clock.deltaTimeStamp >= 3.6e+6 ) {
                time = time.format( 'HH:mm:ss' );
            }
            else {
                time = time.format( 'mm:ss:SS' );
            }

            return time;
        }
    }
};
</script>
