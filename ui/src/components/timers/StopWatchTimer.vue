<template>
    <div
        class="text-h1"
        v-text="time"
    >
    </div>
</template>

<script>
import moment           from 'moment';
import { mapMutations } from 'vuex';

export default {
    name: 'CountDownTimer',
    data() {
        return {
            initialTimeStamp: Date.now(),
            deltaTimeStamp: 0
        };
    },
    mounted() {
        // TODO::: SWITCH RUNNING TO AN ENUM SO TIME CAN BE RESET?
        this.registerSubscriber( ( time, running ) => {
            if ( running ) {
                this.deltaTimeStamp += ( this.$store.state.globalTimeIntervalMilliseconds / 1000 );
            }
        } );
    },
    computed: {
        time() {
            return moment()
                .hour( 0 )
                .minute( 0 )
                .second( this.deltaTimeStamp )
                .format( 'HH:mm:ss' );
        }
    },
    methods: {
        ...mapMutations( [ 'registerSubscriber' ] )
    }
};
</script>
