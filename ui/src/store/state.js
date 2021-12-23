export default {
    timeRunning: false,
    selectedComponent: null,

    globalTime: Date.now(),
    globalTimeInterval: null,
    globalTimeIntervalMilliseconds: 50,
    subscribedMethods: [],

    footer: {
        inset: false,
        height: 64
    }
};
