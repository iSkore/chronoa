<template>
    <div
        class="text-h1"
        v-text="time"
    >
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import TimerMixin       from '../mixins/TimerMixin';
import moment           from 'moment';

export default {
    name: 'StopWatchTimer',
    mixins: [ TimerMixin ],
    data() {
        return {
            id: 'StopWatchTimer'
        };
    },
    mounted() {
        this.registerSubscriber( ( time, running ) => {
            // TODO::: Still need to implement reset
            if ( running ) {
                this.increment( this.$store.state.globalTimeIntervalMilliseconds );
            }
        } );
    },
    computed: {
        time() {
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
