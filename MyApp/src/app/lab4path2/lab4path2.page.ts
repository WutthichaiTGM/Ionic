import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lab4path2',
  templateUrl: './lab4path2.page.html',
  styleUrls: ['./lab4path2.page.scss'],
})
export class Lab4path2Page implements OnInit {
  Items = [
    {
      name: 'โคนัน',
      phone: '042987456',
      mobile: '0987654321',
      email: 'Conan@gmail.com',
      image: '../assets/Conan/2.png',
    },
    {
      name: 'โมริ โคโกโร่',
      phone: '0431235489',
      mobile: '0845321459',
      email: 'Morikokoro@gmail.com',
      image: '../assets/Conan/1.jpg',
    },
    {
      name: 'โมริ รัน',
      phone: '0431235489',
      mobile: '0856541231',
      email: 'Morirun@gmail.com',
      image: '../assets/Conan/3.jfif',
    }, {
      name: 'ด็อกเตอร์ อากาสะ',
      phone: '046321231',
      mobile: '0651325486',
      email: 'Arkasakung@gmail.com',
      image: '../assets/Conan/4.jpg',
    },
  ];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  }

  bb() {
    this.navCtrl.pop();
  }

}
