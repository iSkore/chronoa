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
import TimerMixin       from '../mixins/TimerMixin';

export default {
    name: 'CountDownTimer',
    mixins: [ TimerMixin ],
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
