export default {
    commitConfig( state, config ) {
        Object.assign( state, config );
    },

    switchTimer( state, override = null ) {

        // TODO: Need to think about how this is going to work with respect to selectedComponent
        if ( override !== null ) {
            state.timeRunning = override;
        }
        else {
            state.timeRunning = !state.timeRunning;
        }
    },

    initiateGlobalTimeInterval( state ) {
        state.globalTimeInterval = setInterval( () => {
            state.globalTime = Date.now();
            this.commit( 'updateTime', state.globalTime );
        }, state.globalTimeIntervalMilliseconds );
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

    setSelectedComponent( state, component ) {
        state.selectedComponent = component;
    },

    playSound( state, name ) {
        const sound = document.getElementById( name );
        sound.play();
    }
};
