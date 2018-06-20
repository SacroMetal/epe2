import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresandoPage } from './ingresando';

@NgModule({
  declarations: [
    IngresandoPage,
  ],
  imports: [
    IonicPageModule.forChild(IngresandoPage),
  ],
})
export class IngresandoPageModule {}
