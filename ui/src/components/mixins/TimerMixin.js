import moment from 'moment';

export default {
    data: () => ( {
        initialTimeStamp: Date.now(),
        deltaTimeStamp: 0
    } ),
    computed: {
        time() {
            let time = moment( this.deltaTimeStamp )
                // .hour( 0 )
                // .minute( 0 )
                // .second( this.deltaTimeStamp )
                // .format( 'HH:mm:ss' );
                .format( 'mm:ss:SS' );

            return time;
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
