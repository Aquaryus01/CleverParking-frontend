export class ParkingPlace {
    constructor(index: number, name: string, lat:number, long:number, distance:number,
        adress, full, max_cars, now_cars, price){
        this.id = index;
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.distance = distance;
        this.address = adress;
        this.full = full;
        this.max_cars = max_cars;
        this.now_cars = now_cars;
        this.price = price;
    }
    id: number;
    name: string;
    lat: number;
    long: number;
    distance: number;
    address: string;
    full: number;
    max_cars: number;
    now_cars: number;
    price: number;
}