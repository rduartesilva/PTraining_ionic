import { Component, OnInit } from '@angular/core';

import { StorageService } from '../services/storage.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.page.html',
  styleUrls: ['./tabela.page.scss'],
})
export class TabelaPage implements OnInit {

  dadosData: any;

  constructor(
    public apiService: StorageService,
    public alertController: AlertController
  ) { 
    this.dadosData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllDados();
  }

  getAllDados() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.dadosData = response;
    })
  }

  async presentAlertConfirm(item) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quer continuar?',
      message: 'Deseja <strong>eliminar</strong> esta mensagem?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.apiService.deleteItem(item.id).subscribe(Response => {
              this.getAllDados();
            });
          }
        }
      ]
    });
    await alert.present();
  }
}