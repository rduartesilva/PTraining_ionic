import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  x:String = "email.com";
  constructor(
    private router: Router,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
  }

  btnClicked(){
    this.router.navigate(["home"]);
  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ]
  };

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    password: ['', [Validators.required, Validators.maxLength(100)]]
  });

  public submit(){
    console.log(this.loginForm.value);
  }

  btnClickedlog(){
      this.router.navigate(["pinicial"])
  }
}
