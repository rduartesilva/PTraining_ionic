import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plano-de-treino',
  templateUrl: './plano-de-treino.page.html',
  styleUrls: ['./plano-de-treino.page.scss'],
})
export class PlanoDeTreinoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["pinicial"])
  }

  buttonClickedForca(){
    this.router.navigate(["dificuldade1"])
  }

  buttonClickedCardio(){
    this.router.navigate(["dificuldade2"])
  }

  buttonClickedCircuito(){
    this.router.navigate(["dificuldade3"])
  }

}
