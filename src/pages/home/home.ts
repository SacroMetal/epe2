import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IniciarPage } from '../iniciar/iniciar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

     IniciarSesion(){

        this.navCtrl.push(IniciarPage);

    }


}
