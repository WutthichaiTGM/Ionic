import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage implements OnInit {
  myfruit: string;

  radiolist = [{
    id: '1',
    name: 'radiolist',
    value: 'Mango',
    checked: true,
    disable: false
  }, {
    id: '2',
    name: 'radiolist',
    value: 'PineApple',
    checked: false,
    disable: false
  }, {
    id: '3',
    name: 'radiolist',
    value: 'Papaya',
    checked: false,
    disable: false
  }];

  selectFruit(event) {
    this.myfruit = event.target.value;
    console.log('Selected Fruit is' + this.myfruit);
  }

  constructor(public toastCtrl: ToastController, public navCtrl: NavController) { }

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Fruit: ' + this.myfruit,
      duration: 5000,
    });
    toast.present();
  }


  bb() {
    this.navCtrl.pop();
  }
  ngOnInit() {
  }
}

