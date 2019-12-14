import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from 'src/app/_models/place';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnInit {
  constructor(private http: HttpClient){

  }
  lat: number = 51.678418;
  latPlace: number =  51.678418;;
  lng: number = 7.809007;
  lngPlace: number = 7.809007;
  radius:number = 50000;
  selectedPlace = 0;

  ngOnInit() {
    this.data = []

    var query = `?location=` + this.lat + "," + this.lng + `
    &radius=`+ this.radius + `
    &key=AIzaSyBEgEtjNunnLyyIBVO0ZlCh3gReySJZhkQ
    &callback=foo`;
    this.http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json" + query,
      ).subscribe(places => { 
        places["results"].forEach((place,index) => {
          console.log(place)
          var a = {
            id: index,
            name: place["name"],
            lat: place["geometry"]["location"]["lat"],
            lng: place["geometry"]["location"]["lng"]
          };
          //new Place(,,,place);
          this.data.push(a);
          
        });
      });
  }

  ngAfterViewInit(){
    console.log(this.data);
  }

  data;
  keyword = 'name';

  setMarkerLocation($event){
    this.selectedPlace = 1;
    this.latPlace = $event.coords.lat;
    this.lngPlace = $event.coords.lng;
  }

  selectEvent(item) {
    this.selectedPlace = 1;
    this.latPlace = item["lat"];
    this.lngPlace = item["lng"];
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}
