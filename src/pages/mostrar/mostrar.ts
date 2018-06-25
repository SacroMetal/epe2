import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {

  arrData = []
  nombre
  

  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems/").subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });
  }




}


