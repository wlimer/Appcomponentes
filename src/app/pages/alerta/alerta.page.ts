import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(public alertCtrl: AlertController ) { }

  ngOnInit() {
  }
async presentAlert() {
    const alert = await this.alertCtrl.create({
      // cssClass: 'my-custom-class',
      header: 'Alerta!',
      subHeader: 'Estas por realizar una Accion',
      message: 'Estas seguro que quieres hacerlo',
      buttons: ['OK']
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
     
      header: 'Alerta!!!',
      subHeader: 'cuidado',
      message: 'estas a punto de realizar una accion peligrosa',
      //buttons: ['Cancel', 'Open Modal', 'Delete']
      buttons:[
        {
        text:"OK!!",
        handler:()=>{
          console.log("Acabas de dar click en ok!")
          }

        },
        {
        text:"Eliminar",
        cssClass:"rojo"
      
        },
        {
        text:"cancelar",
        role:"cancel",
       
        }


]

    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
    
      header: 'Prompt!',
      backdropDismiss:false,
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2015-01-01',
          max: '2021-09-30'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: 1,
          max: 2
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'password',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 7,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data:any) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  
}
