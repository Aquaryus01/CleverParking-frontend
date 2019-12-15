export class Place {
    constructor(index: number, name: string, lat:number, lng:number){
        this.id = index;
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
    id: number;
    name: string;
    lat: number;
    lng: number;
}