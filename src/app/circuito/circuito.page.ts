import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.page.html',
  styleUrls: ['./circuito.page.scss'],
})
export class CircuitoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["dificuldade3"])
  }

}
