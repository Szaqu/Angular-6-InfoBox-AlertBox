import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [AlertComponent, InfoComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertComponent,InfoComponent]
})
export class InfoboxModule { }
