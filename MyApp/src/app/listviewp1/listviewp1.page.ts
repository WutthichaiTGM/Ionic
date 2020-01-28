import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
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

  constructor(public navCtrl: NavController) { }

  add(item) {
    this.navCtrl.navigateForward(['listviewp2']);
  }
  edit(item) {

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
