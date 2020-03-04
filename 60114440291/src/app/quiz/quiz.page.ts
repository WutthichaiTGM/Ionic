import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { inherits } from 'util';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }
  caption: string;
  Mdate = new Date().toDateString();
  image = 'http://placekitten.com/g/150/200';
  Items = [
    {
      caption: 'Study Ionic Programming',
      date: '12 Feb 2020, 9.00 AM',
      image: 'http://placekitten.com/g/150/200',
    },
    {
      caption: 'Test Lab Programming',
      date: '22 Jan 2020, 8.30 AM',
      image: 'http://placekitten.com/g/200/200 ',
    }
  ];
  ngOnInit() {

  }
  // Create
  create() {
    const dataObj = {
      caption: this.caption,
      date: this.Mdate,
      image: this.image = 'http://placekitten.com/g/200/200',
    };
    const dataString = JSON.stringify(dataObj);
    const obj = JSON.parse(dataString);
    this.Items.push(obj);
    console.log(dataString);
    console.log(this.Items);
  }
  // Delete
  async delete(item) {
    const index = this.Items.indexOf(item);
    const prompt = await this.alertCtrl.create({
      header: 'ยืนยันการลบ',
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
            console.log('OK');
            this.Items.splice(index, 1);

          }
        }
      ]
    });
    prompt.present();
  }
}
