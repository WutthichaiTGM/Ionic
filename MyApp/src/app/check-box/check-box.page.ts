import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})

export class CheckBoxPage implements OnInit {
  // cucumber: boolean;
  // myfruit: string;
  // pepperoni: string;
  // sausage: string;
  // mushrooms: string;
  // radiolist = [{
  //   id: '1',
  //   name: 'rov',
  //   value: 'ROV',
  //   checked: true,
  //   disable: false
  // }, {
  //   id: '2',
  //   name: 'pokemon 3d',
  //   value: 'Pokemon 3D',
  //   checked: false,
  //   disable: false
  // }, {
  //   id: '3',
  //   name: 'rcadence of hyrule',
  //   value: 'Rcadence Rf Hyrule',
  //   checked: false,
  //   disable: false
  // }, {
  //   id: '4',
  //   name: 'super mario mark 2',
  //   value: 'Super Mario Mark 2',
  //   checked: true,
  //   disable: false
  // }];

  // selectFruit(event) {
  //   this.myfruit = event.target.value;
  //   this.cucumber = event.target.checked;
  //   console.log('Selected Fruit is' + this.myfruit + ' checked is ' + this.cucumber);

  // }
  // constructor(public toastCtrl: ToastController) { }
  // async openToast() {
  //   const toast = await this.toastCtrl.create({
  //     message: 'Fruit: ' + this.myfruit + ' Checked is ' + this.cucumber,
  //     duration: 5000,
  //   });
  //   toast.present();
  // }
  // ngOnInit() {
  // }

  testList: any = [
    {
      id: '1',
      name: 'ROV',
      value: 0,
      checked: true,
      disable: false
    },
    {
      id: '2',
      name: 'Pokemon 3D',
      value: 0,
      checked: false,
      disable: false
    },
    {
      id: '3',
      name: 'Cadence of Hyule',
      value: 0,
      checked: false,
      disable: false
    },
    {
      id: '4',
      name: 'Super Mario Maker 2',
      value: 0,
      checked: true,
      disable: false
    },
  ];
  selectedArray: any;

  Clear() {
    for (let i = 0; i <= this.testList.length; i++) {
      // tslint:disable-next-line: triple-equals
      if (this.testList[i].checked == true) {
        this.testList[i].value += 1;
      }
      this.testList[i].checked = false;
    }
  }

  selectMember(data) {
    // tslint:disable-next-line: triple-equals
    if (data.checked == true) {
    } else {
      // tslint:disable-next-line: only-arrow-functions
      const newArray = this.selectedArray.filter(function(el) {
        return el.testID !== data.testID;
      });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
  }

  constructor(public navCtrl: NavController) { }
  selectGame(event) {
    event.target.value += 1;
    console.log('Selected Fruit is ' + event.target.name);
  }
  bb() {
    this.navCtrl.pop();
  }
  ngOnInit() {
  }

}
