import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dificuldade3',
  templateUrl: './dificuldade3.page.html',
  styleUrls: ['./dificuldade3.page.scss'],
})
export class Dificuldade3Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["plano-de-treino"])
  }

  buttonClickedIniciante(){
    this.router.navigate(["circuito"])
  }

  buttonClickedIntermedio(){
    this.router.navigate(["chest"])
  }

  buttonClickedAvancado(){
    this.router.navigate(["circuito-ava"])
  }
}
