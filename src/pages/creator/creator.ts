import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import * as $ from 'jquery';

@Component( {
	selector: 'page-home',
	templateUrl: 'creator.html'
} )

/*
// TODO: timers

- allow for multiple timers
- pick timer on calendar
- stand-up timer?
- high intensity / color coding
- pattern maker
 */

export class CreatorPage
{
	type: string;
	timestamp: string = '00:00:00';
	hours: number = 0;
	minutes: number = 0;
	seconds: number = 0;

	constructor( public viewCtrl: ViewController,
				 params: NavParams )
	{
		this.type = params.get( 'type' );
	}

	ionViewDidLoad()
	{
		if( this.type === 'timer' ) {
			console.log( 'create timer' );
			$( '#content' ).append(
				`<h1 ion-text color="light">${ this.timestamp }</h1>`
			)
		}
	}

	pad2( n )
	{
		return n < 10 ? `0${ n }` : n;
	}

	updateText()
	{
		this.timestamp = this.pad2( this.hours ) + this.pad2( this.minutes ) + this.pad2( this.seconds );
	}

	dismiss()
	{
		let data = { 'foo': 'bar' };
		this.viewCtrl.dismiss( data );
	}
}
