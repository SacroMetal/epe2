import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InsertarPage } from '../pages/insertar/insertar';
import { EliminarPage } from '../pages/eliminar/eliminar';
import { MostrarPage } from '../pages/mostrar/mostrar';
import { ModificarPage } from '../pages/modificar/modificar';
import { IniciarPage } from '../pages/iniciar/iniciar';
import { MenuPage } from '../pages/menu/menu';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyCX8U3AC1xJDlQqBsWFWLMiUbLsp_GhLC8",
  authDomain: "ionic3db-87211.firebaseapp.com",
  databaseURL: "https://ionic3db-87211.firebaseio.com",
  projectId: "ionic3db-87211",
  storageBucket: "",
  messagingSenderId: "378628578092"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InsertarPage,
    IniciarPage,
    MenuPage,
    EliminarPage,
    MostrarPage,
    ModificarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InsertarPage,
    IniciarPage,
    MenuPage,
    EliminarPage,
    MostrarPage,
    ModificarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
