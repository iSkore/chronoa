<template>
    <div
        class="text-h1"
        v-text="formattedTime"
    >
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import moment           from 'moment';

export default {
    name: 'StopWatchTimer',
    data() {
        return {
            timeRunning: false,
            deltaTimeStamp: 0
        };
    },
    mounted() {
        this.$eventBus.on( 'globalTimeChanged.0', ( val ) => {
            this.timeRunning = val;
        } );

        this.$eventBus.on( 'resetTime.0', () => {
            this.timeRunning    = false;
            this.deltaTimeStamp = 0;
        } );

        this.registerSubscriber( () => {
            if ( this.timeRunning ) {
                this.deltaTimeStamp += this.$store.state.globalTimeIntervalMilliseconds;
            }
        } );
    },
    computed: {
        formattedTime() {
            let time = moment( this.deltaTimeStamp );

            // if deltaTimeStamp is over an hour, remove milliseconds
            if ( this.deltaTimeStamp >= 3.6e+6 ) {
                time = time.format( 'HH:mm:ss' );
            }
            else {
                time = time.format( 'mm:ss:SS' );
            }

            return time;
        }
    },
    methods: {
        ...mapMutations( [ 'registerSubscriber' ] )
    }
};
</script>
