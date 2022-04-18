import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circuito-ava',
  templateUrl: './circuito-ava.page.html',
  styleUrls: ['./circuito-ava.page.scss'],
})
export class CircuitoAvaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["dificuldade3"])
  }

}
