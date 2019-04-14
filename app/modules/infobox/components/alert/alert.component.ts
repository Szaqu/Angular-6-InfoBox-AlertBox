import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private alertBox : any = {};

  constructor(private infoBoxS: InfoService) { }

  ngOnInit() {
    this.infoBoxS.statusAlertBox().subscribe(data => {
      this.alertBox = data;
    });
  }



}
