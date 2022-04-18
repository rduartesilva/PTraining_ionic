import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-apoio',
  templateUrl: './apoio.page.html',
  styleUrls: ['./apoio.page.scss'],
})
export class ApoioPage {

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
  ) { }

  async showAlert(){

    let alert = this.alertCtrl.create({
      cssClass: 'my-alert',
      header: "Sucesso",
      message: "A sua mensagem foi enviada com sucesso. Obrigado!",
      buttons: [
        {
          text: "Ok", handler: (res) => {
          }
        }
      ]
    
    }).then(res => res.present());

  }

}
