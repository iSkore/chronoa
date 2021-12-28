export default {
    globalTimeRunning: false,
    activeTimerComponent: 1,

    globalTime: Date.now(),
    globalTimeInterval: null,
    globalTimeIntervalMilliseconds: 10,
    subscribedMethods: [],

    clock: {
        // open: false,
        open: true,
        title: 'EMOM',
        description: 'Every Minute On the Minute',
        timeRunning: false,
        deltaTimeStamp: 0
    },

    settingsSheet: {
        model: false
    }
};
