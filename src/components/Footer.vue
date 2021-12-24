<template>
    <v-footer
        class="pt-0 pb-0"
        min-height="64"
        fixed
        app
    >
        <StopWatchTimerFooter
            v-if="$store.state.activeTimerComponent === 0"
        />
    </v-footer>
</template>

<script>
import StopWatchTimerFooter from './timer-footers/StopWatchTimerFooter';

export default {
    name: 'Footer',
    components: { StopWatchTimerFooter }
};
</script>
