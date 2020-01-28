import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.page.html',
  styleUrls: ['./show-results.page.scss'],
})
export class ShowResultsPage implements OnInit {
  n: string;
  a: string;
  c: string;
  s: string;
  constructor(private navCtrl: NavController, private activaterroute: ActivatedRoute) { }

  ngOnInit() {
    const dataRecv = this.activaterroute.snapshot.paramMap.get('data');
    const obj = JSON.parse(dataRecv);
    this.n = obj['name'];
    this.a = obj['age'];
    this.c = obj['cost'];
    this.s = obj['salary'];
  }

}
