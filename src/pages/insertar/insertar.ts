import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-insertar',
  templateUrl: 'insertar.html'
})
export class InsertarPage {

  arrData = []
  nombre
  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems/").subscribe(_data => {
      this.arrData = _data;

      console.log(this.arrData);
    });
  }

  btnAddClicked(){
    this.fdb.list("/myItems/").push(this.nombre);

    let toast2 = this.toastCtrl.create({
      message: 'Agregado Gatito: '+this.nombre+'',
      duration: 3000,
      position: 'center'})
      toast2.present();}


  }




