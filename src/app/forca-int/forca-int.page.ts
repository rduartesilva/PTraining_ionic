import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forca-int',
  templateUrl: './forca-int.page.html',
  styleUrls: ['./forca-int.page.scss'],
})
export class ForcaIntPage implements OnInit {

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
