import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinicial',
  templateUrl: './pinicial.page.html',
  styleUrls: ['./pinicial.page.scss'],
})
export class PinicialPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["login"])
  }

  buttonClickedPDT(){
    this.router.navigate(["plano-de-treino"])
  }

  buttonClickedEP(){
    this.router.navigate(["exerc-person"])
  }

}
