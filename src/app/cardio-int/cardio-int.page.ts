import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardio-int',
  templateUrl: './cardio-int.page.html',
  styleUrls: ['./cardio-int.page.scss'],
})
export class CardioIntPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["dificuldade2"])
  }

}
