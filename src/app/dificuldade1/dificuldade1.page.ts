import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dificuldade1',
  templateUrl: './dificuldade1.page.html',
  styleUrls: ['./dificuldade1.page.scss'],
})
export class Dificuldade1Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  btnClicked(){
    this.router.navigate(["plano-de-treino"])
  }

  buttonClickedIniciante(){
    this.router.navigate(["forca"])
  }

  buttonClickedIntermedio(){
    this.router.navigate(["forca-int"])
  }

  buttonClickedAvancado(){
    this.router.navigate(["forca-ava"])
  }

}
