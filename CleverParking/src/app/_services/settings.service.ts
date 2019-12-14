import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  URL = "http://192.168.0.170:5000/";

  getURL(){
    return this.URL;
  }
  constructor() { }
}
