import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FinderModule } from './_modules/finder/finder.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FinderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
