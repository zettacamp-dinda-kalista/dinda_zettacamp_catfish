import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListModule } from './card-list/card-list.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
