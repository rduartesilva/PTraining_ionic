import { Component, OnInit } from '@angular/core';
import { DadosexercService } from '../services/dadosexerc.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exerc-person',
  templateUrl: './exerc-person.page.html',
  styleUrls: ['./exerc-person.page.scss'],
})
export class ExercPersonPage implements OnInit {
exercData: any;

  constructor(
    private router: Router,
    public apiService: DadosexercService
  ) {
    this.exercData = [];
  }

  ngOnInit() {

  }

  ionViewWillEnter() {

    this.getAllExerc();
  }

  getAllExerc() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      this.exercData = response;
    })
  }

  btnClicked(){
    this.router.navigate(["pinicial"])
  }

  btnClickedOpen(id){
    document.getElementById(id).style.display = "block";
  }

  btnClickedClose(id){
    document.getElementById(id).style.display = "none";
  }

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');

  timer: number;
  interval;

  startDuration = 0;

  state: 'start' | 'stop' = 'stop';


  startTimer(duration: number){
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.updateTimeValue();
    this.interval = setInterval( () => {
      this.updateTimeValue()
    }, 1000);
  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  updateTimeValue(){
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    ++this.timer;

    if(this.timer < 0){
      this.startTimer(this.startDuration);
    }
  }

}
