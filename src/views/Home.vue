<template>
    <v-stepper
        v-model="step"
        class="ma-0 pa-0"
    >
        <v-stepper-header>
            <v-stepper-step
                :complete="step > 1"
                step="1"
            >
                Select timer type
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="complete"
                step="Go!"
            >
                Complete
            </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <v-row>
                    <v-col cols="12">
                        <v-btn
                            color="info"
                            @click="completeWithInstructions(
                                'EMOM',
                                'Every Minute On the Minute'
                            )"
                            block
                        >
                            EMOM
                        </v-btn>
                    </v-col>

                    <v-col cols="12">
                        <v-btn color="success" block>
                            Custom
                        </v-btn>
                    </v-col>
                </v-row>
            </v-stepper-content>
        </v-stepper-items>

        <v-stepper-items>
            <v-stepper-content step="Go!">
                <v-row>
                    <v-col cols="12">
                        <div
                            class="text-h3 text-center"
                        >
                            {{ instructions.title }}
                        </div>
                    </v-col>

                    <v-col cols="12">
                        <div
                            class="text-h6 text-center"
                        >
                            {{ instructions.subtitle }}
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn
                            color="green"
                            elevation="0"
                            min-height="200px"
                            min-width="200px"
                            x-large
                            fab
                            @click="startClock()"
                        >
                            GO!
                        </v-btn>
                    </v-col>
                </v-row>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            step: 1,
            complete: false,
            instructions: {
                title: '',
                subtitle: ''
            }
        };
    },
    methods: {
        completeWithInstructions( title, subtitle ) {
            this.step                  = 'Go!';
            this.complete              = true;
            this.instructions.title    = title;
            this.instructions.subtitle = subtitle;
        },
        startClock() {
            this.$store.state.clock.open = true;
        }
    }
};
</script>
