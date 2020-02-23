import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  image: any = '';
  constructor(private camera: Camera) { }
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      this.image = (window as any).Ionic.WebView.convertFileSrc(imageData
      );
    }, (err) => {
      // Handle error
      alert('error ' + JSON.stringify(err));
    });
  }
  ngOnInit() {
  }

}
