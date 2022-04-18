import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardio-ava',
  templateUrl: './cardio-ava.page.html',
  styleUrls: ['./cardio-ava.page.scss'],
})
export class CardioAvaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["dificuldade2"])
  }

}
