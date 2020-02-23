import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './myapi.page';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private myapi: ServiceAPICRUD, public alertCtrl: AlertController, public navCtrl: NavController) { }
  admin: any;
  ngOnInit() {
  }
  Admin() {
    this.myapi.Admin().subscribe(data => {
      this.admin = data.map(e => {
        return {
          myAdmin: e.payload.doc.data()['name'.toString()],
        };
        console.log(this.admin);
        
      });
    });
  }
}
