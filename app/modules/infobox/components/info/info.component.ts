import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-infobox',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  private infoBox: any = {};

  constructor(private infoBoxS: InfoService) { }

  ngOnInit() {
    this.infoBoxS.statusInfoBox().subscribe(data => {
      this.infoBox = data;
    });
  }

  closeinfoBox(){
    this.infoBoxS.closeInfoBox();
  }


}
