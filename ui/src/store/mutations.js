export default {
    commitConfig( state, config ) {
        Object.assign( state, config );
    },

    switchTimer( state, override = null ) {
        if ( override !== null ) {
            state.timeRunning = override;
        }
        else {
            state.timeRunning = !state.timeRunning;
        }
    },

    updateTime( state, time ) {
        const subscribedMethods = state.subscribedMethods;
        for ( let i = 0; i < subscribedMethods.length; i++ ) {
            subscribedMethods[ i ]( time, state.timeRunning );
        }
    },

    registerSubscriber( state, subscriber = () => {} ) {
        state.subscribedMethods.push( subscriber );
    },

    playSound( state, name ) {
        const sound = document.getElementById( name );
        sound.play();
    }
};
