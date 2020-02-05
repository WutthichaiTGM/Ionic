import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './serviceLab7.page';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lab7-part2',
  templateUrl: './lab7-part2.page.html',
  styleUrls: ['./lab7-part2.page.scss'],
})
export class Lab7Part2Page implements OnInit {

  constructor(private myapi: ServiceAPICRUD, public alertCtrl: AlertController) { }
  tasklist: any;
  tmptitle: string;
  tmpplace: string;
  tmpdate: string;

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
    let record = {};
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


  editdata() {
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
}
