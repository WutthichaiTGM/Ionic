import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-p1login',
  templateUrl: './p1login.page.html',
  styleUrls: ['./p1login.page.scss'],
})
export class P1loginPage implements OnInit {
  uname: string;
  password: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoResult() {
    this.navCtrl.navigateForward('p2result' + '/' + this.uname + '/' + this.password);
    // this.navCtrl.navigateForward(['p2result', this.uname , this.password]);
  }
  gotorasultObj() {
    // collect data as JSON Fotmat
    const dataObj = {
      name1: this.uname,
      pass1: this.password
    };
    const dataString = JSON.stringify(dataObj);

    this.navCtrl.navigateForward(['p2result', dataString]);
  }
  bb() {
    this.navCtrl.pop();
  }
}
