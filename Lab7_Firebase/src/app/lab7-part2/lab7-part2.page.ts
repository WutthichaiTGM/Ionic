import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './serviceLab7.page';
@Component({
  selector: 'app-lab7-part2',
  templateUrl: './lab7-part2.page.html',
  styleUrls: ['./lab7-part2.page.scss'],
})
export class Lab7Part2Page implements OnInit {

  constructor(private myapi: ServiceAPICRUD) { }
  tasklist: any;
  tmptitle: string;
  tmpplace: string;
  tmpdate: string;

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
  removedata(rowid) {
    this.myapi.deleteData(rowid);
  }


  editdata() {

  }
}
