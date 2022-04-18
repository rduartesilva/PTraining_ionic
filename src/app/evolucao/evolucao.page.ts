import { Component, OnInit } from '@angular/core';

import { Dados } from '../models/dados';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.page.html',
  styleUrls: ['./evolucao.page.scss'],
})
export class EvolucaoPage implements OnInit {

  data: Dados;

  constructor(
    public apiService: StorageService,
    public router: Router,
    public toastController: ToastController
  ) {
    this.data = new Dados();
   }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Adicionado com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['dados-list']);
    });
  }

}