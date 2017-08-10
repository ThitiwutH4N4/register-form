import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  fname: string;
  lname: string;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/Nurse/Profile');
  }
  addItem(fname, lname) {
    this.items.push({ FristName: fname });
    this.items.push({ LastName: lname });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
}