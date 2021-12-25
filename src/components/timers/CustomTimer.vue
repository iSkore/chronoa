<template>
    <v-stepper
        v-model="e1"
        class="ma-0 pa-0"
    >
        <v-stepper-header>
            <v-stepper-step
                :complete="e1 > 1"
                step="1"
            >
                Select timer type
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e1 > 2"
                step="2"
            >
                Name of step 2
            </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                >
                    <v-btn
                        color="error"
                        class="mr-4"
                    >
                        EMOM
                    </v-btn>
                </v-card>

                <v-spacer></v-spacer>

                <v-btn
                    color="primary"
                    @click="e1 = 2"
                >
                    Next
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                ></v-card>

                <v-btn
                    color="primary"
                    @click="e1 = 3"
                >
                    Continue
                </v-btn>

                <v-btn text>
                    Cancel
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                ></v-card>

                <v-btn
                    color="primary"
                    @click="e1 = 1"
                >
                    Continue
                </v-btn>

                <v-btn text>
                    Cancel
                </v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
import { mapMutations } from 'vuex';

// TODO:: Use steppers to make a super customizable option (https://vuetifyjs.com/en/components/steppers/)
// TODO:: Have quick select options (EMOM, EMOM with rest, etc)
export default {
    name: 'CustomTimer',
    data() {
        return {
            e1: 1
        };
    },
    mounted() {
        this.registerSubscriber( ( time, running ) => {
            // TODO::: Still need to implement reset
            if ( running ) {
                // this.increment( this.$store.state.globalTimeIntervalMilliseconds / 1000 );
                this.increment( this.$store.state.globalTimeIntervalMilliseconds );
            }
        } );
    },
    methods: {
        ...mapMutations( [ 'registerSubscriber' ] )
    }
};
</script>
