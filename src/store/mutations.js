export default {
    commitConfig( state, config ) {
        Object.assign( state, config );
    },

    toggleTimeRunning( state, override = null ) {
        if ( override !== null ) {
            state.globalTimeRunning = override;
        }
        else {
            state.globalTimeRunning = !state.globalTimeRunning;
        }

        this.$eventBus.emit( `globalTimeChanged.${ state.activeTimerComponent }`, state.globalTimeRunning );
    },

    resetTime( state ) {
        this.commit( 'toggleTimeRunning', false );
        this.$eventBus.emit( `resetTime.${ state.activeTimerComponent }` );
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
            subscribedMethods[ i ]( time );
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
