import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import {ToastController} from 'ionic-angular';
/**
 * Generated class for the EliminarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eliminar',
  templateUrl: 'eliminar.html',
})
export class EliminarPage {

  arrData = []
  nombre
  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems/").subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });
  }


  delete (i){
    this.fdb.list("/myItems/").remove(this.arrData[i].$key)

    let toast2 = this.toastCtrl.create({
      message: 'Eliminado Gatito: :(',
      duration: 3000,
      position: 'center'})
      toast2.present();}

  }


