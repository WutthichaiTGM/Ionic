import { Story } from './story.page';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lab402',
  templateUrl: './lab402.page.html',
  styleUrls: ['./lab402.page.scss'],
})
export class Lab402Page implements OnInit {
  storylist: Array<Story>;
  likes: number;
  likeval = 0;
  com: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.storylist = new Array();

  }

  ngOnInit() {

    this.storylist.push(new Story(1, '../../assets/ฟ.jpg', 'บักหน้าโง่', 'ข้าวเจ้าบักหน้าโง่', this.likeval, this.com));
    this.storylist.push(new Story(2, '../../assets/user.png', 'โง่', 'โง่', this.likeval, this.com));
  }
  like(i: number) {
    this.storylist[i].likevalue++;
    console.log(this.storylist[i].likevalue++);
  }
  bb() {
    this.navCtrl.pop();
  }
  async Comment(i: number) {
    const prompt = await this.alertCtrl.create({
      header: 'Comment',
      message: 'ระบายความในใจเลย',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'comment'
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
            this.storylist[i].commentlist.push(data.name1);
            console.log('Saved clicked');
            console.log(data.name1 + ' ' + i);

          }
        }
      ]
    });
    await prompt.present();
  }
}
