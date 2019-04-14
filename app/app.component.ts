import { Component } from '@angular/core';
import { InfoService } from './modules/infobox/services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlertBox';

  constructor(private infoBox: InfoService) { }
  
  openAlertA(){
    this.infoBox.openAlertBox('Test alertBox');
  }

  openInfoA(message,status){
    this.infoBox.openInfoBox(message,status);
  }
  
}

