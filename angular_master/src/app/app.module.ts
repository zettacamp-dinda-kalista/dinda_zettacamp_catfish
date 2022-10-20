import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule  } from './hero/hero.module';
import { ListItemModule } from './list-item/list-item.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    ListItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
