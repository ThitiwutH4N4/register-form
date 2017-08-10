import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

export const firebaseConfig = {
    apiKey: "AIzaSyC1zNxT1q_qoIW2zzgOLzirvsH00zQqMh0",
    authDomain: "m-care-a8c02.firebaseapp.com",
    databaseURL: "https://m-care-a8c02.firebaseio.com",
    projectId: "m-care-a8c02",
    storageBucket: "",
    messagingSenderId: "971429687890"
};


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
