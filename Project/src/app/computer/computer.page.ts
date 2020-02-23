import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './comservice.page';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-computer',
  templateUrl: './computer.page.html',
  styleUrls: ['./computer.page.scss'],
})
export class ComputerPage implements OnInit {
  computer: any;
  ibrand: string;
  igen: string;
  iprice: string;
  ispec: string;
  id: any;
  isEdit: boolean = false;
  editRecord = {};

  constructor(
    private myapi: ServiceAPICRUD,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
  ) { }
  ngOnInit() {
    this.myapi.readData().subscribe(data => {
      this.computer = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          mybrand: e.payload.doc.data()['Brand'.toString()],
          mygen: e.payload.doc.data()['Gen'.toString()],
          myprice: e.payload.doc.data()['Price'.toString()],
          myspec: e.payload.doc.data()['Spec'.toString()],
        };
      });
      console.log(this.computer);
    });
  }
  // Creat Record Data
  createRecord() {
    const record = {};
    record['Brand'] = this.ibrand;
    record['Gen'] = this.igen;
    record['Price'] = this.iprice;
    record['Spec'] = this.ispec;

    this.myapi.createData(record).then(resp => {
      this.ibrand = '';
      this.igen = '';
      this.iprice = '';
      this.ispec = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  // Remove Data
  async removedata(rowid) {

    const prompt = await this.alertCtrl.create({
      header: 'Remove Data',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            this.myapi.deleteData(rowid), console.log('Remove');
          }
        }
      ]
    });
    prompt.present();
  }
  // Edit Data
  editdata(record) {
    this.id = record.id;
    this.isEdit = true;
    this.editRecord['Brand'] = record['mybrand'];
    this.editRecord['Gen'] = record['mygen'];
    this.editRecord['Price'] = record['myprice'];
    this.editRecord['Spec'] = record['myspec'];
    console.log(record);
  }

  // UpdateRecord
  updateRecord(rowID) {
    const newrecord = {};
    newrecord['Brand'] = this.ibrand;
    newrecord['Gen'] = this.igen;
    newrecord['Price'] = this.iprice;
    newrecord['Spec'] = this.ispec;
    this.myapi.updateData(this.id, newrecord);
    console.log(newrecord);
  }

  // Home
  home() {
    this.isEdit = false;
    this.ibrand = '';
    this.igen = '';
    this.iprice = '';
    this.ispec = '';
    this.navCtrl.pop();
  }
}
