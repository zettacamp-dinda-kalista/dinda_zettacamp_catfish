import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angularday4Module } from './angularday4/angularday4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angularday4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
