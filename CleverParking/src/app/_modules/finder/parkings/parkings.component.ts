import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from 'src/app/_services/settings.service';
import { ParkingPlace } from 'src/app/_models/parkingPlace';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private http: HttpClient,
    private settings: SettingsService) { }

  data: ParkingPlace[];
  ngOnInit() {
    this.data = [];
    this.route
    .queryParams
    .subscribe(param => {
      let latParam = param["lat"];
      let longParam = param["long"];
      var todayTimeHour = new Date().getHours();
      var a = {lat: latParam, long: longParam, hour: todayTimeHour};
      this.http.post(this.settings.URL + "find_nearest", JSON.stringify(a))
      .subscribe((parkingPlaces) => {
          let list = parkingPlaces["response"];
          list.forEach((element,index) => {
            this.data.push(new ParkingPlace(index, element["name"], element["lat"], element["long"],element["distance"]))
          });
        });
        console.log(this.data)
      })
  }

}
