import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-iniciar',
  templateUrl: 'iniciar.html',
})
export class IniciarPage {

  usuario: any;
  contraseña: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarPage');
  }

 Iniciar(){

      this.navCtrl.push(MenuPage);
  }

  Pagina(){
      this.navCtrl.push(MenuPage);
  }

}
