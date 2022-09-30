import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlhHZR3c86qGiT4pVMs4qGlwFMJCkSX2A',
  authDomain: 'cards-60a91.firebaseapp.com',
  projectId: 'cards-60a91',
  storageBucket: 'cards-60a91.appspot.com',
  messagingSenderId: '968184822150',
  appId: '1:968184822150:web:90dc84d571d3bcf0011407',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
