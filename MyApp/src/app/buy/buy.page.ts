import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
  c: number;
  b: number;
  constructor(private navCtrl: NavController, private activaterroute: ActivatedRoute) { }

  ngOnInit() {
    const dataRecv = this.activaterroute.snapshot.paramMap.get('dataBuy');
    const obj = JSON.parse(dataRecv);
    console.log(obj);
    this.c = obj.cc;
    this.b = obj.bb;
    // console.log(this.c);

  }
  bb() {
    this.navCtrl.pop();
  }

}
