export class ParkingPlace {
    constructor(index: number, name: string, lat:number, long:number, distance:number){
        this.id = index;
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.distance = distance;
    }
    id: number;
    name: string;
    lat: number;
    long: number;
    distance: number;
}