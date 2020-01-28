import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subbmi',
  templateUrl: './subbmi.page.html',
  styleUrls: ['./subbmi.page.scss'],
})
export class SUBBMIPage implements OnInit {
  kabmi: string;
  sbmi: string;
  constructor(private navCtrl: NavController, private activaterroute: ActivatedRoute) { }

  ngOnInit() {
    const dataRecv = this.activaterroute.snapshot.paramMap.get('dataBMI');
    const obj = JSON.parse(dataRecv);

    console.log(dataRecv);
    console.log(obj);

    this.kabmi = obj["bb"];
    this.sbmi = obj["sb"];
  }
  bb() {
    this.navCtrl.pop();
  }

}
