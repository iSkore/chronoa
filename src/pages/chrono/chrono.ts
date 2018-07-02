import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Insomnia } from '@ionic-native/insomnia';

import * as $ from 'jquery';

@Component( {
	selector: 'page-home',
	templateUrl: 'chrono.html'
} )

/*
// TODO: timers

- allow for multiple timers
- pick timer on calendar
- stand-up timer?
- high intensity / color coding
- pattern maker
 */

export class ChronoPage
{
	time: number = 60;
	timeDelta: number = 10;

	firstEl: any;
	secondEl: any;
	thirdEl: any;
	fourthEl: any;

	fps: number = 60;
	interval: any;

	constructor( public viewCtrl: ViewController,
				 params: NavParams,
				 private insomnia: Insomnia )
	{
		console.log( 'UserId', params.get( 'myParam' ) );

		// this.keepAwake()
		// 	.then( () => console.log( 'ok' ) );
	}


	dismiss()
	{
		this.viewCtrl.dismiss();
	}

	ionViewDidLoad()
	{
		this.firstEl = $( '.first' );
		this.secondEl = $( '.second' );
		this.thirdEl = $( '.third' );
		this.fourthEl = $( '.fourth' );

		this.go( 5000, 3000 );
	}

	/**
	 * draw the portion of the circle from the angle,
	 * based on the calculated percentage between the value and the total.
	 * passes on an "alert" value that will be checked against current value
	 * and will add an "alert" class to the highlighted style
	 */
	draw( value, total, alertValue, alertClass ) {
		// calculates the resulting angle (in degrees)
		let angle = Math.floor( ( value * 180 ) / ( total / 2 ) );

		// when still on the first half of the transition,
		// just update rotation for the first two semi-circles
		if( angle < 180 ) {
			this.firstEl.css( '-webkit-transform', 'rotate(' + ( 180 + angle ) + 'deg)' );
			this.secondEl.css( '-webkit-transform', 'rotate(' + angle + 'deg)' );
		}

		// if we have passed half the way, set first and second semi-circles to a fixed rotation
		// and continue animating the two other ones
		else {
			// increment previous calculation
			angle = angle + 180;
			this.firstEl.css( '-webkit-transform', 'rotate(720deg)' );
			this.secondEl.css( '-webkit-transform', 'rotate(540deg)' );
			this.thirdEl.css( '-webkit-transform', 'rotate(' + ( 180 + angle ) + 'deg)' );
			this.fourthEl.css( '-webkit-transform', 'rotate(' + angle + 'deg)' );
		}

		if( value >= alertValue ) {
			$( '.highlighted' ).addClass( alertClass );
		}
	}

	/**
	 * A simple setInterval function, that will trigger the draw() method
	 * upon a given fps rate, until reaching a specified duration.
	 */
	go( duration, alert ) {

		// define counter and delay between intervals
		// (miliseconds calculated from previously defined fps rate)
		let count = 0,
			delay = ~~( 1 / this.fps * 1000 );

		// the interval function
		this.interval = setInterval( () => {

			// adds to the counter
			count = count + delay;

			// checks if interval is complete, and clears interval
			if( count >= duration ) {
				clearInterval( this.interval );
			}

			// draw the composition, takes the alert param and defines the alert class
			this.draw( count, duration, alert, 'alert' );

		}, delay );
	}

	startUpdate()
	{
		console.log( 'startUpdate' );

		this.firstEl.css( '-webkit-transform', '' );
		this.secondEl.css( '-webkit-transform', '' );
		this.thirdEl.css( '-webkit-transform', '' );
		this.fourthEl.css( '-webkit-transform', '' );
		$( '.highlighted' ).removeClass( 'alert' );

		setInterval(
			() => {
				this.time--;
				this.timeDelta++;
			}, 1000
		);
	}

	keepAwake()
	{
		return this.insomnia.keepAwake();
	}

	allowSleep()
	{
		return this.insomnia.allowSleepAgain();
	}
}
