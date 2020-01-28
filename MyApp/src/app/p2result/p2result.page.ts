import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p2result',
  templateUrl: './p2result.page.html',
  styleUrls: ['./p2result.page.scss'],
})
export class P2resultPage implements OnInit {
  x: string;
  y: string;
  n: string;
  p:string;
  item: any = {};
  constructor(private navCtrl: NavController, private activaterroute: ActivatedRoute) { }

  ngOnInit() {
    //  this.x =  this.activaterroute.snapshot.paramMap.get('myname');
    //  this.y =  this.activaterroute.snapshot.paramMap.get('mypass');
    const dataRecv = this.activaterroute.snapshot.paramMap.get('dataObj');
    const obj = JSON.parse(dataRecv);
    console.log(dataRecv);
    console.log(obj);
    console.log(typeof (obj));
    console.log(obj["name1"]);
    console.log(obj["pass1"]);
    this.n = obj["name1"];
    this.p = obj["pass1"];
  }

  gotologin() {
    this.navCtrl.pop();

  }
}
