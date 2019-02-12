import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

//Componentes creados
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../pages/terminados/terminados.component';
import { AgregarPage } from '../pages/agregar/agregar.component';

//Servicios creados
import { DeseosService } from '../services/deseos.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ //entryComponents son paginas especiales de Ionic que carga de forma dinamica
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage //Pegamos la pagina que creamos para que tambien se cargue de forma dinamica
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
