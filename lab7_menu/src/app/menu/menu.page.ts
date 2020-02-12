import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './MenuAPIService.page';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private myapi: ServiceAPICRUD, public alertCtrl: AlertController, public navCtrl: NavController) { }
  tasklist: any;
  tmpname: string;
  tmpprice: string;
  editRecord = {};
  isEdit: boolean = false;

  ngOnInit() {
    this.myapi.readData().subscribe(data => {
      this.tasklist = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          myname: e.payload.doc.data()['name'.toString()],
          myprice: e.payload.doc.data()['price'.toString()],
        };
      });
      console.log(this.tasklist);
    });
  }
  createRecord() {
    const record = {};
    record['name'] = this.tmpname;
    record['price'] = this.tmpprice;

    this.myapi.createData(record).then(resp => {
      this.tmpname = '';
      this.tmpprice = '' ;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  async removedata(rowid) {

    const prompt = await this.alertCtrl.create({
      header: 'Remove',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: data => {
            this.myapi.deleteData(rowid), console.log('Remove');
          }
        }
      ]
    });
    prompt.present();
  }

  editdata(record) {
    this.isEdit = true;
    this.editRecord['name'] = record['myname'];
    this.editRecord['price'] = record['myprice'];
    console.log(record);
  }
  UpdateRecord() {

  }
  home() {
    this.isEdit = false;
    this.tmpname = '';
    this.tmpprice = '';
    this.navCtrl.pop();
    // this.navCtrl.navigateForward(['lab7-part2']);
    // this.navCtrl.navigateRoot('lab7-part2');
  }

}
