import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimerPage } from '../pages/timer/timer';
import { CreatorPage } from '../pages/creator/creator';
import { ChronoPage } from '../pages/chrono/chrono';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Insomnia } from '@ionic-native/insomnia';

import { ChartsModule } from 'ng2-charts';
import { LongPressModule } from 'ionic-long-press';

@NgModule( {
	declarations: [
		MyApp,
		HomePage,
		TimerPage,
		CreatorPage,
		ChronoPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot( MyApp ),
		AmplifyAngularModule,
		ChartsModule,
		LongPressModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [
		MyApp,
		HomePage,
		TimerPage,
		CreatorPage,
		ChronoPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		AmplifyService,
		LocalNotifications,
		Insomnia,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
} )

export class AppModule
{

}
