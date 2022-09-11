'use strict';

const moment = require( 'moment' );

/**
 * GlobalTime
 */
class GlobalTime
{
    static COUNTER_TYPE = {
        UP: 1,
        DOWN: -1
    };

    /**
     *
     * @param {Object} opts
     * @param {number=10} opts.frequencyResolutionInterval - update frequency of setInterval
     * @param {number=1} opts.counterType - to count up or down
     * @param {number} opts.targetTime - time to count up or down from
     */
    constructor( opts = {} )
    {
        opts.frequencyResolutionInterval = opts.frequencyResolutionInterval || 10;
        opts.counterType                 = opts.counterType || GlobalTime.COUNTER_TYPE.UP;

        this.opts = opts;

        if ( opts.counterType === GlobalTime.COUNTER_TYPE.UP ) {
            this.globalTime = 0;
        }
        else {
            this.globalTime = opts.targetTime;
        }

        this.interval   = null;
        this.intervalFn = () => {
            if ( opts.counterType === GlobalTime.COUNTER_TYPE.UP ) {
                this.globalTime += this.opts.frequencyResolutionInterval;
                this.startTime += this.opts.frequencyResolutionInterval;
            }
            else {
                this.globalTime -= this.opts.frequencyResolutionInterval;
            }
        };
    }

    start() {
        this.startTime = Date.now();
        this.interval  = setInterval( this.intervalFn, this.opts.frequencyResolutionInterval );
    }

    stop() {
        clearInterval( this.interval );
    }

    getCurrentTime() {
        return this.globalTime;
    }
}

console.log( 1, 1000 );
console.log( 60, 6e4 );

const timer = new GlobalTime( {
    frequencyResolutionInterval: 10,
    counterType: GlobalTime.COUNTER_TYPE.DOWN,
    targetTime: 6e4
} );

timer.start();

setInterval( () => {
    console.log( moment( timer.startTime ).from( timer.startTime + timer.getCurrentTime() ) );
}, 600 );

( async () => {
    await setTimeout( () => timer.stop(), 1000 );
    await setTimeout( () => timer.start(), 2000 );
    await setTimeout( () => process.exit(), 5000 );
} )();