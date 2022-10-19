import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewprojectModule } from './newproject/newproject.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewprojectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
