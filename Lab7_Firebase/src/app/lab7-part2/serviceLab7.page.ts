import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ServiceAPICRUD {
//   updateData(rowid: any, newrecord: {}) {
//     throw new Error("Method not implemented.");
//   }
    constructor(private myfirestore: AngularFirestore) { }
    // CRUD Operation

    readData() {
        return this.myfirestore.collection('mytasklist').snapshotChanges();
    }
    createData(record) {
        return this.myfirestore.collection('mytasklist').add(record);
    }
    deleteData(recordID: any) {
        this.myfirestore.doc('mytasklist/' + recordID).delete();
    }
    updateData(recordID , record) {
        this.myfirestore.doc('mytasklist/' + recordID ).update(record);
    }

}
