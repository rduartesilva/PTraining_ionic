import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forca-ava',
  templateUrl: './forca-ava.page.html',
  styleUrls: ['./forca-ava.page.scss'],
})
export class ForcaAvaPage implements OnInit {

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

}
