export default {
    globalTimeRunning: false,
    activeTimerComponent: 1,

    globalTime: Date.now(),
    globalTimeInterval: null,
    globalTimeIntervalMilliseconds: 10,
    subscribedMethods: [],

    clock: {
        open: false
    },

    settingsSheet: {
        model: false
    }
};
