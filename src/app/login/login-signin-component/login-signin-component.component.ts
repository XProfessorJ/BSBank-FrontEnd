import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer-service';

@Component({
  selector: 'app-login-signin-component',
  templateUrl: './login-signin-component.component.html',
  styleUrls: ['./login-signin-component.component.css']
})
export class LoginSigninComponentComponent implements OnInit {
  private userId;
  private password;
  constructor(
    private customerService:CustomerService
  ) { }

  ngOnInit() {
  }
  login(){
    alert(this.userId+this.password);
    this.customerService.userLogin(this.userId,this.password);
  }
}
