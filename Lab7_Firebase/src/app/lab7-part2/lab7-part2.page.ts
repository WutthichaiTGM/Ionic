import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './serviceLab7.page';
import { AlertController, NavController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-lab7-part2',
  templateUrl: './lab7-part2.page.html',
  styleUrls: ['./lab7-part2.page.scss'],
})
export class Lab7Part2Page implements OnInit {

  constructor(private myapi: ServiceAPICRUD, public alertCtrl: AlertController, public navCtrl: NavController) { }
  tasklist: any;
  tmptitle: string;
  tmpplace: string;
  tmpdate: string;
  editRecord = {};
  isEdit: boolean = false;
  id: any;
  ngOnInit() {
    this.myapi.readData().subscribe(data => {
      this.tasklist = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          mytitle: e.payload.doc.data()['title'.toString()],
          myplace: e.payload.doc.data()['place'.toString()],
          mydate: e.payload.doc.data()['tododate'.toString()],
        };
      });
      console.log(this.tasklist);
    });
  }
  createRecord() {
    const record = {};
    record['title'] = this.tmptitle;
    record['place'] = this.tmpplace;
    record['tododate'] = new Date(this.tmpdate);

    this.myapi.createData(record).then(resp => {
      this.tmptitle = '';
      this.tmpplace = '';
      this.tmpdate = '';
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
    this.id =  record.id;
    this.isEdit = true;
    // const editRecord = {};
    this.editRecord['title'] = record['mytitle'];
    this.editRecord['place'] = record['myplace'];
    // this.editRecord['tododate'] = record['mytododate'];
    // this.tmpdate = new Date(record['mydate']).toISOString();
    this.tmpdate = new Date(record['mydate'].seconds * 1000).toISOString();

    console.log(record);
  }
  updateRecord(rowID) {
    const newrecord = {};
    newrecord['title'] = this.tmptitle;
    newrecord['place'] = this.tmpplace;
    newrecord['tododate'] = new Date(this.tmpdate);
    this.myapi.updateData(this.id, newrecord);
    console.log(newrecord);
  }

  home() {
    this.isEdit = false;
    this.tmptitle = '';
    this.tmpplace = '';
    // this.tmpdate = new Date().toISOString();
    this.tmpdate = '';
    this.navCtrl.pop();
    // this.navCtrl.navigateForward(['lab7-part2']);
    // this.navCtrl.navigateRoot('lab7-part2');
  }
}
