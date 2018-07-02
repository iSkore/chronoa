import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { pad2, randomNumber } from '../../assets/utils';

@Component( {
	selector: 'page-home',
	templateUrl: 'timer.html'
} )

export class TimerPage
{
	id: number;

	timestamp: string = '00:00:00';

	_hours: number = 0;
	_minutes: number = 0;
	_seconds: number = 0;

	constructor( public viewCtrl: ViewController, params: NavParams )
	{
		this.id = randomNumber( 1000000 );
	}

	buttonPressed( info, n )
	{
		if( info === 'hours' ) {
			this.hours += n;
		} else if( info === 'minutes' ) {
			this.minutes += n;
		} else if( info === 'seconds' ) {
			this.seconds += n;
		}

		this.updateTimestamp();
	}

	get hours()
	{
		return this._hours;
	}

	set hours( n )
	{
		this._hours = n;

		if( this._hours < 0 ) {
			this._hours = 0
		}
	}

	get minutes()
	{
		return this._minutes;
	}

	set minutes( n )
	{
		this._minutes = n;

		if( this._minutes >= 60 ) {
			this._minutes = 0;
			this.hours++;
		} else if( this._minutes < 0 ) {
			if( this.hours > 0 ) {
				this._minutes = 59;
				this.hours--;
			} else {
				this._minutes = 0;
			}
		}
	}

	get seconds()
	{
		return this._seconds;
	}

	set seconds( n )
	{
		this._seconds = n;

		if( this._seconds >= 60 ) {
			this._seconds = 0;
			this.minutes++;
		} else if( this._seconds < 0 ) {
			if( this.minutes > 0 ) {
				this._seconds = 59;
				this.minutes--;
			} else if( this.hours > 0 ) {
				this._seconds = 59;
				this._minutes = 59;
				this.hours--;
			} else {
				this._seconds = 0;
			}
		}
	}

	updateTimestamp()
	{
		this.timestamp = `${ pad2( this.hours ) }:${ pad2( this.minutes ) }:${ pad2( this.seconds ) }`
	}

	dismiss()
	{
		const duration = ( this.hours * 3.6e6 ) + ( this.minutes * 6e4 ) + ( this.seconds * 1e3 );

		this.viewCtrl.dismiss( {
			id: this.id,
			title: 'Chronoa Timer',
			text: 'Timer Complete',
			sound: 'file://assets/sounds/Alarm1.wav',
			duration,
			triggerTime: new Date( new Date().getTime() + duration )
		} );
	}
}
