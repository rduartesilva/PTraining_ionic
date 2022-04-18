import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dificuldade2',
  templateUrl: './dificuldade2.page.html',
  styleUrls: ['./dificuldade2.page.scss'],
})
export class Dificuldade2Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["plano-de-treino"])
  }

  buttonClickedIniciante(){
    this.router.navigate(["cardio"])
  }

  buttonClickedIntermedio(){
    this.router.navigate(["chest"])
  }

  buttonClickedAvancado(){
    this.router.navigate(["cardio-ava"])
  }

}
