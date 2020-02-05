import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './ServiceAPICRUD.page';
@Component({
  selector: 'app-dbhomep1',
  templateUrl: './dbhomep1.page.html',
  styleUrls: ['./dbhomep1.page.scss'],
})
export class Dbhomep1Page implements OnInit {

  constructor(private myapi: ServiceAPICRUD) { }
  tasklist: any;
  ngOnInit() {
    this.myapi.readData().subscribe(data => {
      this.tasklist = data.map(e => {
      return {
      id: e.payload.doc.id,
      isEdit: false,
      myplace: e.payload.doc.data()['place'.toString()],
      mytitle: e.payload.doc.data()['title'.toString()],
      mydate: e.payload.doc.data()['tododate'.toString()],
      };
      });
      console.log(this.tasklist);
      });
  }

}
