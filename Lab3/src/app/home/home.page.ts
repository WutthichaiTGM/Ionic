import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  testList: any = [
    {
      id: '1',
      name: 'COMPUTER-2500 Baht',
      value: 2500,
      checked: true,
      disable: false
    },
    {
      id: '2',
      name: 'CHINEASE LANGUAGES - 2000 Baht',
      value: 2000,
      checked: false,
      disable: false
    },
    {
      id: '3',
      name: 'COMMUNICATION SKILL – 1500 Baht',
      value: 1500,
      checked: false,
      disable: false
    },
  ];
  selectedArray: any;


  click() {
    for (let i = 0; i <= this.testList.length; i++) {
      // tslint:disable-next-line: triple-equals
      if (this.testList[i].checked == true) {
        this.testList[i].value += 1;
      }
      this.testList[i].checked = false;
    }
  }

  selectMember(member) {
    // tslint:disable-next-line: triple-equals
    if (member.checked == true) {
    } else {
      // tslint:disable-next-line: only-arrow-functions
      const newArray = this.selectedArray.filter(function(el) {
        return el.testID !== member.testID;
      });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
  }


  constructor(private navCtrl: NavController, private activaterroute: ActivatedRoute) { }
  selectGame(event) {
    event.target.value += 1;
    console.log('Selected Fruit is ' + event.target.name);
  }
  ngOnInit(): void {

  }


}
