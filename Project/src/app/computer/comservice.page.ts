import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root'
})
export class ServiceAPICRUD {
    constructor(private myfirestore: AngularFirestore) { }
    readData() {
        return this.myfirestore.collection('computer').snapshotChanges();
    }
    createData(record) {
        return this.myfirestore.collection('computer').add(record);
    }
    deleteData(recordID: any) {
        this.myfirestore.doc('computer/' + recordID).delete();
    }
    updateData(recordID , record) {
        this.myfirestore.doc('computer/' + recordID ).update(record);
    }

}
