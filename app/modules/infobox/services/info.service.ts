import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { 
    this.alertBox['show'] = false;
    this.alertBox['message'] = '11';
  }

  public alertBox: any = {};
  public interval;

  alertBoxObservable = new Subject<any>();

  openAlertBox(message){
    this.alertBox['show'] = true;
    this.alertBox['message'] = message;
    this.alertBoxObservable.next(this.alertBox);
    setInterval(() => { this.closeAlertBox(); }, 5000);
  }

  closeAlertBox(){
    this.alertBox['show'] = false;
    this.alertBox['message'] = '';
    this.alertBoxObservable.next(this.alertBox);
  }

  statusAlertBox() : Observable<any>{
    return this.alertBoxObservable.asObservable();
  }

  infoBox: any = {};

  infoBoxObservable = new Subject<any>();

  openInfoBox(message,status){
    this.infoBox['show'] = true;
    this.infoBox['message'] = message;
    this.infoBox['status'] = status;
    this.infoBoxObservable.next(this.infoBox);
    clearInterval(this.interval);
    if(status) {this.interval = setInterval(() => { this.closeInfoBox(); }, 5000); }
    else { clearInterval(this.interval) }
  }

  closeInfoBox(){
    this.infoBox['show'] = false;
    this.infoBox['message'] = '';
    this.infoBoxObservable.next(this.infoBox);
  }

  statusInfoBox() : Observable<any>{
    return this.infoBoxObservable.asObservable();
  }


}
