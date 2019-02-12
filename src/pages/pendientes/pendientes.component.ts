import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController,AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesPage{

  constructor( public deseosService: DeseosService,
                      private navCtrl: NavController,
                      private alertCtrl: AlertController){
                        //NavController permite crear navegacion entre páginas. Para asegurar correcto funcionamiento, se debe agregar el import de la línea 4 y declarar la ruta donde será direccionada (línea 5).

  }

  listaSeleccionada( lista: Lista ){
    console.log( lista );
  }

  agregarLista(){
    const alerta = this.alertCtrl.create({
      title: 'Nueva Lista',
      //message: 'Agregue un nombre a la lista que va a crear',
      inputs:[{
        name: 'titulo',
        placeholder:'Nombre'
      }],
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Agregar',
        handler: data =>{
          //Si no se escribe nada y se le da Aceptar
          if( data.titulo.length === 0 ){
            return;
          }
          this.navCtrl.push( AgregarPage,{
            titulo: data.titulo
          } );
          console.log(data);
        }
      }]
    });

    alerta.present();
  }
}
