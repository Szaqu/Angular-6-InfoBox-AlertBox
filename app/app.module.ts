import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { InfoboxModule } from './modules/infobox/infobox.module';
import { InfoService } from './modules/infobox/services/info.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    InfoboxModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
