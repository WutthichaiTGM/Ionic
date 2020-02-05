import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
  GoogleMapOptions
} from '@ionic-native/google-maps';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  testList: any = [
    {
      id: '1',
      name: 'COMPUTER-2500 Baht',
      value: 2500,
      checked: true,
      disable: false
    },
    {
      id: '2',
      name: 'CHINEASE LANGUAGES - 2000 Baht',
      value: 2000,
      checked: false,
      disable: false
    },
    {
      id: '3',
      name: 'COMMUNICATION SKILL – 1500 Baht',
      value: 1500,
      checked: false,
      disable: false
    },
  ];
  selectedArray: any;
  map: any;


  click() {
    for (let i = 0; i <= this.testList.length; i++) {
      // tslint:disable-next-line: triple-equals
      if (this.testList[i].checked == true) {
        this.testList[i].value += 1;
      }
      this.testList[i].checked = false;
    }
  }

  selectMember(member) {
    // tslint:disable-next-line: triple-equals
    if (member.checked == true) {
    } else {
      // tslint:disable-next-line: only-arrow-functions
      const newArray = this.selectedArray.filter(function (el) {
        return el.testID !== member.testID;
      });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
  }


  constructor(private navCtrl: NavController, private activaterroute: ActivatedRoute) { }
  selectGame(event) {
    event.target.value += 1;
    console.log('Selected Fruit is ' + event.target.name);
  }
  ngOnInit(): void {

  }
  initMap() {

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
              });
          });

      });
  }
}
