import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule, TransferState, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import this line
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { MapComponent } from './map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClassComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAQnkkRwZvLD7W9Uy9OJIy_PQSZW7FbCr0",
      authDomain: "eilishballet.firebaseapp.com",
      projectId: "eilishballet",
      storageBucket: "eilishballet.appspot.com",
      messagingSenderId: "82205126231",
      appId: "1:82205126231:web:d69ec08e91805055ee7d12"
    }),
    ReactiveFormsModule
  ],
  providers: [provideClientHydration(), AngularFirestore, { provide: APP_ID, useValue: 'eilishballet' }, TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
