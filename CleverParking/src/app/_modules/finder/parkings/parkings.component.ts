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

  fil1 = 0;
  fil2 = 0;
  fil3 = 0;
  fil4 = 0;

  getColor(nr:number){
      console.log(nr);
      return "red";
  }

  goToLink(latFinish, longFinish)
  {console.log("da")
      var url = "https://www.google.com/maps/dir/" + this.settings.getStart()+
                "/" + latFinish + "," + longFinish;
      console.log(url)
    window.open(url, "_blank");
  }

  sortyBy(type){
    if(type=="price"){
      if(this.fil1==0)
      {
        this.fil1=1;
        this.data = this.data.sort((x, y) => x["price"] > y["price"] ? -1 : 1);
      }
      else if(this.fil1==1)
      {
        this.fil1=0;
        this.data = this.data.sort((x, y) => x["price"] > y["price"] ? 1 : -1);
      }
    }

    if(type=="distance"){
      if(this.fil2==0)
      {
        this.data = this.data.sort((x, y) => x["distance"] > y["distance"] ? -1 : 1);
        this.fil2=1;
      }
      else if(this.fil2==1)
      {
        this.data = this.data.sort((x, y) => x["distance"] > y["distance"] ? 1 : -1);
        this.fil2=0;
      }
    }

    if(type=="free"){
      if(this.fil3==0)
      {
        this.fil3=1;
        this.data = this.data.sort((x, y) => x["now_cars"] > y["now_cars"] ? -1 : 1);
      }
      else if(this.fil3==1)
      {
        this.fil3=0;
        this.data = this.data.sort((x, y) => x["now_cars"] > y["now_cars"] ? 1 : -1);
      }
    }

    if(type=="statistic"){
      if(this.fil4==0)
      {
        this.fil4=1;
        this.data = this.data.sort((x, y) => x["full"] > y["full"] ? -1 : 1);
      }
      else if(this.fil4==1)
      {
        this.fil4=0;
        this.data = this.data.sort((x, y) => x["full"] > y["full"] ? 1 : -1);
      }
    }

    console.log(this.data);
  }

  data: ParkingPlace[] = [];
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
          this.data = [];
          list.forEach((element,index) => {
            this.data.push(new ParkingPlace(index, element["name"], element["lat"], element["long"],element["distance"],
            element["address"],element["full"],element["max_cars"],element["now_cars"],element["price"]))
          });
        });
      })
  }

}
