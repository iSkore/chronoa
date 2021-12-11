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
            deltaTimeStamp: Date.now()
        };
    },
    mounted() {
        this.registerSubscriber( ( time, running ) => {
            if ( running ) {
                console.log( this.initialTimeStamp, time );
                // this.deltaTimeStamp += ;
                // 1639260450294
                // 1639260472314
            }
        } );
    },
    computed: {
        time() {
            // moment().hour(0).minute(0).second(counter++).format('HH : mm : ss');
            return moment( this.deltaTimeStamp ).format( 'HH:mm:ss' );
        }
    },
    methods: {
        ...mapMutations( [ 'registerSubscriber' ] )
    }
};
</script>
