import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-lab4path1',
  templateUrl: './lab4path1.page.html',
  styleUrls: ['./lab4path1.page.scss'],
})
export class Lab4path1Page implements OnInit {
  selectedArray: any;
  list = [];
  dataString: any;
  name = [];
  buy = 0;
  price = 0;
  count = 0;
  c = 0;
  basket = [];
  Mass: string;
  public goalList: any;
  public loaderGoalList: any[];
  constructor(public navCtrl: NavController, private storage: Storage, public alertCtrl: AlertController) { }

  itemlist = [
    {
      id: '1',
      name: 'น้ำส้ม',
      price: 25,
      icon: '../assets/orange-juice.png',
      chacked: false,
    }, {
      id: '2',
      name: 'น้ำโค๊ก',
      price: 12,
      icon: '../assets/soda.png',
      chacked: false,
    }, {
      id: '3',
      name: 'เป๊ปซี่',
      price: 15,
      icon: '../assets/pepsi.png',
      chacked: false,
    }, {
      id: '4',
      name: 'สไปรท์',
      price: 18,
      icon: '../assets/Sprite.jpg',
      chacked: false,
    }, {
      id: '5',
      name: 'โค้กซีโร่',
      price: 18,
      icon: '../assets/zero.jpg',
      chacked: false,
    }
  ];
  activaterroute: any;

  selectMember(item) {
    // tslint:disable-next-line: triple-equals
    if (item.chacked == true) {
      const c = 1;
      this.count -= c;
      this.buy -= item.price;
      this.name.pop();
      // console.log('ราคา ' + this.buy);
      // console.log(this.count);
      // console.log(this.name);
      this.basket.push(this.buy);

      // tslint:disable-next-line: triple-equals
    } else if (item.chacked != true) {
      this.buy += item.price;
      const c = +1;
      this.count += c;
      this.name.push(item.name);
      // console.log('ราคา ' + this.buy);
      // console.log(this.count);
      // console.log(this.name);
    }
    // console.log(this.selectedArray);
  }
  Buy(item) {
    const dataBuy = {
      Buy: this.buy,
      Name: this.name,
      Count: this.count,
    };
    this.dataString = JSON.stringify(dataBuy);
    const obj = JSON.parse(this.dataString);
    this.list.push(obj);
    this.storage.set('Buy', obj);
    // this.storage.set('Count', this.count);
    console.log('Buy', obj);

    // this.navCtrl.navigateForward(['buy', this.dataString]);

  }
  ngOnInit() {
  }

  async loaddata() {
    this.storage.get('Buy').then(async (val) => {
      console.log('ข้อมูล', val);
      this.Mass = 'สินค้า: ' + val.Name + '<br>' + 'จำนวน: ' + val.Count + ' ชิ้น' + '<br>' + 'ราคา: ' + val.Buy + ' บาท';
      const prompt = await this.alertCtrl.create({
        header: 'ตะกร้า',
        message: this.Mass,
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

            }
          }
        ]
      });
      prompt.present();
    });

  }

  bb() {
    this.navCtrl.pop();
  }

}
