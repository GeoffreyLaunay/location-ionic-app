import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import * as L from "leaflet";

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  public coords: any;
  public accuracy: any;
  public error: string;

  map: L.Map;
  center: L.PointTuple;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation
  ) {

  }

  ionViewDidLoad() {
    this.map = L.map('leafletmap', {
      center: [48.11, -1.53],
      zoom:   13
    });

    var position = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Ma localisation'
    }).addTo(this.map);
  }

  public getLocation() {
    console.log("getLocation()");
    
    this.geolocation.getCurrentPosition().then( (resp) => {
      console.log(resp);
      this.coords   = resp.coords;
      this.accuracy = resp.coords.accuracy

      L.marker([this.coords.latitude, this.coords.longitude]).addTo(this.map)
      .bindPopup("Je suis ici !")
      .openPopup();

    }).catch( (error) => {
      this.error = error;
      console.log("Error getting location", error);
    });
  }

}
