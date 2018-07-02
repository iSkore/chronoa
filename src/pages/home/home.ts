import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { Cache } from 'aws-amplify';

import { Insomnia } from '@ionic-native/insomnia';

import { TimerPage } from '../timer/timer';
import { CreatorPage } from '../creator/creator';
import { ChronoPage } from '../chrono/chrono';

import * as $ from 'jquery';
import { LocalNotifications } from "@ionic-native/local-notifications";

@Component( {
	selector: 'page-home',
	templateUrl: 'home.html'
} )

/*
// TODO: timers

- allow for multiple timers
- pick timer on calendar
- stand-up timer?
- high intensity / color coding
- pattern maker

- Look into Location based notifications and search gyms in the area
 */

export class HomePage
{
	constructor( public navCtrl: NavController,
				 public modalCtrl: ModalController,
				 private localNotifications: LocalNotifications,
				 private insomnia: Insomnia )
	{

	}

	openCreatorPage( type )
	{
		let modal;

		if( type === 'timer' ) {
			modal = this.modalCtrl.create( TimerPage, { type } );
		}

		modal.onDidDismiss( data => {
			console.log( data );
			Cache.setItem( 'key', 'value' );
			this.createNotification( data.id, data.title, data.text, data.triggerTime, data.sound );
		} );

		modal.present();
	}

	openModalWithParams()
	{
		let modal = this.modalCtrl.create( ChronoPage, { 'myParam': 'hello modal' } );
		modal.onDidDismiss( data => {
			console.log( data );
		} );
		modal.present();
	}

	ionViewDidLoad()
	{
	}

	createNotification( id, title, text, triggerTime, sound )
	{
		console.log( title );
		console.log( sound );
		this.localNotifications.schedule( {
			id,
			title,
			text,
			sound,
			trigger: { at: triggerTime }
		} );
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
