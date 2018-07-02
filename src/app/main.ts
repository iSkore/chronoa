import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule( AppModule );

import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure( awsmobile );