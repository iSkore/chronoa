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
