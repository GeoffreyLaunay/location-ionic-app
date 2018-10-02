import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  public coords: any;
  public accuracy: any;
  public error: string;

  constructor(
    public navCtrl: NavController,
    public camera: Camera
  ) {

  }

  public getLocation() {
    console.log("getLocation()");
    
    
  }

}
