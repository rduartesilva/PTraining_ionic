import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.page.html',
  styleUrls: ['./forca.page.scss'],
})
export class ForcaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  buttonClickedIntermedio(){
    this.router.navigate(["chest"])
  }

  btnClicked(){
    this.router.navigate(["dificuldade1"])
  }

  buttonClickedDificuldade1(){
    this.router.navigate(["dificuldade1"])
  }

  buttonClickedDificuldade2(){
    this.router.navigate(["dificuldade2"])
  }

  buttonClickedDificuldade3(){
    this.router.navigate(["dificuldade3"])
  }

}
