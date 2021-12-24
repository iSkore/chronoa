export default {
    data: () => ( {
        timeRunning: false,
        initialTimeStamp: Date.now(),
        deltaTimeStamp: 0
    } ),
    computed: {
        time() {
            return this.deltaTimeStamp;
        }
    },
    methods: {
        increment( val ) {
            this.deltaTimeStamp += val;
        },
        decrement( val ) {
            this.deltaTimeStamp -= val;
        },
        reset() {
            this.deltaTimeStamp = 0;
        }
    }
};
