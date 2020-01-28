import { CheckBoxPage } from './../check-box/check-box.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  // tslint:disable-next-line: max-line-length
  constructor(private navCtrl: NavController, private activaterroute: ActivatedRoute, public toast: ToastController) { }
  name: string;
  age: string;
  salary: number;
  toastCtrl: any;
  C: boolean;
  total = 0;

  radiolist = [
    {
      id: '1',
      uname: this.name,
      uage: this.age,
      cost: 'COMPUTER',
      value: 2500,
      checked: true,
      disable: false
    },
    {
      id: '2',
      uname: this.name,
      uage: this.age,
      cost: 'CHINEASE_LANGUAGES',
      value: 2000,
      checked: false,
      disable: false
    },
    {
      id: '3',
      uname: this.name,
      uage: this.age,
      cost: 'COMMUNICATION_SKILL',
      value: 1500,
      checked: false,
      disable: false
    }];
  checked = true;
  selectradio(item) {
    // tslint:disable-next-line: triple-equals
    if (this.checked = this.checked) {
      this.total += item.value;
      console.log(this.total);
    } else {
      this.total = this.total;
      console.log(this.total);
    }
  }
  async click() {

    // this.aa = this.gg;
    // // console.log(this.aa[2]);
    // // tslint:disable-next-line: no-conditional-assignment
    // if (this.aa[0] = this.COM) {
    //   this.s = this.COM;
    //   this.salary = this.COM1;
    //   // tslint:disable-next-line: no-conditional-assignment
    // } else if (this.aa[1] = this.LANG) {
    //   this.s = this.LANG;
    //   this.salary = this.LANG1;
    //   // tslint:disable-next-line: no-conditional-assignment
    // } else if (this.aa[2] = this.SKILL) {
    //   this.s = this.SKILL;
    //   this.salary = this.SKILL1;
    // }
    // const data = {
    //   name: this.name,
    //   age: this.age,
    //   cost: this.s,
    //   salary: this.salary

    // };
    // console.log(data);
    // const dataString = JSON.stringify(data);


    // this.navCtrl.navigateForward(['show-results', dataString]);
    const toast = await this.toast.create({
      message: 'Salary ' + this.total + ' CHECK ' + this.C,
      duration: 5000,
    });
    toast.present();
  }

  ngOnInit() {
  }

}
