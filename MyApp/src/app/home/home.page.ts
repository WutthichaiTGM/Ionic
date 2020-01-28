import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  lab0() {
    this.navCtrl.navigateForward(['p1login']);
  }
  lab1() {
    this.navCtrl.navigateForward(['about']);
  }
  lab2() {
    this.navCtrl.navigateForward(['check-box']);
  }
  lab30() {
    this.navCtrl.navigateForward(['bmi']);
  }
  lab31() {
    this.navCtrl.navigateForward(['registration']);
  }
  lab4() {
    this.navCtrl.navigateForward(['listviewp1/:data']);
  }
  lab42(){
    this.navCtrl.navigateForward(['lab402']);
  }
  bb() {
    this.navCtrl.pop();
  }
  ngOnInit() {
  }
}
