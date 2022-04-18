
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  btnClicked(){
    this.router.navigate(["dificuldade2"])
  }

}
