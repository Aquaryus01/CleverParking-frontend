import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  start;
  URL = "http://homeworkinator.hopto.org:5000/";
  //URL = "http://192.168.0.132:5000/"
  getURL(){
    return this.URL;
  }

  setStart(start){
    this.start = start;
  }

  getStart(){
    return this.start;
  }
  
  constructor() { }
}
