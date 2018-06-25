import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service-provider';
import {IndexPage} from '../index/index';

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public NavParams:NavParams, public service: 
    ServiceProvider, public alertCtrl:AlertController) {}
  
  envioDato( req)
  {
      this.service.dataRegister(req.value)
      .subscribe(
        data=> {
              this.showAlert(data.mensaje);
              this.navCtrl.setRoot(IndexPage);
              console.log(data.mensaje)
        },
        err=>console.log(err)
      );
  }

  showAlert(men)
  {
      let alert = this.alertCtrl.create({
        title: 'Informacion',
        subTitle: men,
        buttons: ['OK']
      });
      alert.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }

}
