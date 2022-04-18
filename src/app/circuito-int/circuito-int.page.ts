import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circuito-int',
  templateUrl: './circuito-int.page.html',
  styleUrls: ['./circuito-int.page.scss'],
})
export class CircuitoIntPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["dificuldade3"])
  }

}
