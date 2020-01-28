import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listviewp2',
  templateUrl: './listviewp2.page.html',
  styleUrls: ['./listviewp2.page.scss'],
})
export class Listviewp2Page implements OnInit {
  add1: string;
  add2: string;
  data = {
    country: this.add1,
    currency: this.add2
  };


  constructor(public navCtrl: NavController) { }

  add() {
    const dataString = JSON.stringify(this.data);
    this.navCtrl.navigateForward(['listviewp1', dataString]);
  }

  ngOnInit() {
  }

}
