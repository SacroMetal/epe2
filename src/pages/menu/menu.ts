import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MostrarPage } from '../mostrar/mostrar';
import { InsertarPage } from '../insertar/insertar';
import { EliminarPage } from '../eliminar/eliminar';
import { ModificarPage } from '../modificar/modificar';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  iraMostrar(){
    this.navCtrl.push(MostrarPage);
  }

  iraInsertar(){
    this.navCtrl.push(InsertarPage);
  }

  iraEliminar(){
    this.navCtrl.push(EliminarPage);
  }

  iraModificar(){
      this.navCtrl.push(ModificarPage);
  }
}
