import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router
  ) {}

  evoClicked(){
    this.router.navigate(["evolucao"])
  }


  pinicialClicked(){
    this.router.navigate(["pinicial"])
  }

  sairClicked(){
    this.router.navigate(["home"])
  }

  apoioClicked(){
    this.router.navigate(["apoio"])
  }
}
