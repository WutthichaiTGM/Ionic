import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-lab4002',
  templateUrl: './lab4002.page.html',
  styleUrls: ['./lab4002.page.scss'],
})
export class Lab4002Page implements OnInit {
  selectedArray: any;
  buy = 0;
  price = 0;
  count = 0;
  c = 0;
  basket = [];
  public goalList: any;
  public loaderGoalList: any[];
  constructor(public navCtrl: NavController) { }

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
      console.log('ราคา ' + this.buy);
      console.log(this.count);
      this.basket.push(this.buy);

      // tslint:disable-next-line: triple-equals
    } else if (item.chacked != true) {
      this.buy += item.price;
      const c = +1;
      this.count += c;
      console.log('ราคา ' + this.buy);
      console.log(this.count);
    }
    // console.log(this.selectedArray);
  }
  Buy(item) {
    const dataBuy = {
      bb: this.buy,
      cc: this.count
    };
    const dataString = JSON.stringify(dataBuy);
    this.navCtrl.navigateForward(['buy', dataString]);

    // this.price = this.buy;
    // this.c = this.count;
  }
  ngOnInit() {
  }
  bb() {
    this.navCtrl.pop();
  }
}
