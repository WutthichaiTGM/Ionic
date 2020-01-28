import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-listviewp1',
  templateUrl: './listviewp1.page.html',
  styleUrls: ['./listviewp1.page.scss'],
})
export class Listviewp1Page implements OnInit {
  myitem: string;
  // itemlist: string[] = ['Thailand', 'Vietnam', 'Singapore', 'Malaysai'];
  itemlist = [
    {
      id: '1',
      country: 'Thailand',
      currency: 'Bath',
      icon: 'heart',
    }, {
      id: '2',
      country: 'Singapore',
      currency: 'Bath',
      icon: 'car',
    }
  ];
  activaterroute: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  async add() {
    const prompt = await this.alertCtrl.create({
      header: 'Add',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.itemlist.push(data.name);
            console.log(this.itemlist);
          }
        }
      ]
    });
    await prompt.present();
  }
  async edit(i) {
    const prompt = await this.alertCtrl.create({
      header: 'Edit',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.itemlist[i].country = data.name1;
            console.log('เสร็จ');
          }
        }
      ]
    });
    await prompt.present();
  }
  delete(item) {
    const index = this.itemlist.indexOf(item);

    if (index > -1) {
      this.itemlist.splice(index, 1);
    }
  }
  ngOnInit() {
    const dataRecv = this.activaterroute.snapshot.paramMap.get('data');
    const obj = JSON.parse(dataRecv);
    console.log(obj);
    this.itemlist.push(obj);
  }

}
