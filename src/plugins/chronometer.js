import Vue    from 'vue';
import moment from 'moment';

/**
 * Chronometer
 */
class Chronometer
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
        opts.counterType                 = opts.counterType || Chronometer.COUNTER_TYPE.UP;

        this.opts = opts;

        if ( opts.counterType === Chronometer.COUNTER_TYPE.UP ) {
            this.globalTime = 0;
        }
        else {
            this.globalTime = opts.targetTime;
        }

        this.interval   = null;
        this.intervalFn = () => {
            if ( opts.counterType === Chronometer.COUNTER_TYPE.UP ) {
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

Vue.use( {
    install() {
        Vue.prototype.$Chronometer = Chronometer;
        Vue.prototype.$Chronometer = function() {
            this.$store.$chronometer = Vue.prototype.$Chronometer;
        };
    }
} );
