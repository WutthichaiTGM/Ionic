import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage implements OnInit {
  height: number;
  weight: number;
  bmi: number;
  sumbmi: string;
  constructor(public navCtrl: NavController) { }

  gotoBMI() {
    const h = this.height / 100;
    this.bmi = (this.weight) / ((h * h));
    // tslint:disable-next-line: no-unused-expression
    this.sumbmi;

    if (this.bmi >= 30) {
      this.sumbmi = 'อ้วนมาก';
    } else if (this.bmi >= 25) {
      this.sumbmi = 'อ้วน';
    } else if (this.bmi >= 23) {
      this.sumbmi = 'น้ำหนักมากเกินไป';
    } else if (this.bmi >= 12.6) {
      this.sumbmi = 'น้ำหนักปกติ เหมาะสม';
    } else {
      this.sumbmi = 'ผอม';
    }

    const dataBMI = {
      bb: this.bmi,
      sb: this.sumbmi
    };

    const dataString = JSON.stringify(dataBMI);
    console.log(this.bmi);

    this.navCtrl.navigateForward(['subbmi', dataString]);
  }
  bb() {
    this.navCtrl.pop();
  }
  ngOnInit() {
  }

}
