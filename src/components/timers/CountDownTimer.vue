<template>
    <v-time-picker
        format="24hr"
        full-width
        scrollable
    >
        <!--        <div class="text-h1" v-text="time"/>-->
    </v-time-picker>
</template>

<script>
import { mapMutations } from 'vuex';

// TODO:: Use steppers to make a super customizable option (https://vuetifyjs.com/en/components/steppers/)
// TODO:: Have quick select options (EMOM, EMOM with rest, etc)
export default {
    name: 'CountDownTimer',
    data() {
        return {
            id: 'CountDownTimer'
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
