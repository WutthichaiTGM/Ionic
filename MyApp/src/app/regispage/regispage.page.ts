import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-regispage',
  templateUrl: './regispage.page.html',
  styleUrls: ['./regispage.page.scss'],
})
export class RegispagePage implements OnInit {
  myinput: string;
  mypass: string;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController) { }

  ngOnInit() {

  }
  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Name: ' + this.myinput + 'Password: ' + this.mypass,
      duration: 5000,
    });
    toast.present();
  }
  bb() {
    this.navCtrl.pop();
  }

}
