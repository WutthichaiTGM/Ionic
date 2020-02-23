import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root'
})
export class ServiceAPICRUD {
    constructor(private myfirestore: AngularFirestore) { }
    // CRUD Operation
    Admin() {
        return this.myfirestore.collection('admin').snapshotChanges();
    }
    readData() {
        return this.myfirestore.collection('menu').snapshotChanges();
    }
    createData(record) {
        return this.myfirestore.collection('menu').add(record);
    }

    deleteData(recordID: any) {
        this.myfirestore.doc('menu/' + recordID).delete();
    }

}