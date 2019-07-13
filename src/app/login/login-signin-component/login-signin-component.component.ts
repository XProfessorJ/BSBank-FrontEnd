import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signin-component',
  templateUrl: './login-signin-component.component.html',
  styleUrls: ['./login-signin-component.component.css']
})
export class LoginSigninComponentComponent implements OnInit {
  private userId;
  private password;
  constructor() { }

  ngOnInit() {
  }
  login(){
    alert(this.userId+this.password);
  }
}
