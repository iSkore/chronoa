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

        phaseText: 'get ready',

        time: '00:00:00',

        sets: 0,
        circut: 0,
        totalTime: '00:00:00',

        timeRunning: false,
        deltaTimeStamp: 0
    },

    settingsSheet: {
        model: false
    }
};
