import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  public coords: any;
  public accuracy: any;
  public error: string;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation
  ) {

  }

  public getLocation() {
    console.log("getLocation()");
    
    this.geolocation.getCurrentPosition().then( (resp) => {
      console.log(resp);
      this.coords   = resp.coords;
      this.accuracy = resp.coords.accuracy
    }).catch( (error) => {
      this.error = error;
      console.log("Error getting location", error);
    });
  }

}
