import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer-service';
import { fromEvent } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {callHooks} from '@angular/core/src/render3/hooks';
@Component({
  selector: 'app-login-signin-component',
  templateUrl: './login-signin-component.component.html',
  styleUrls: ['./login-signin-component.component.css']
})
export class LoginSigninComponentComponent implements OnInit {
  private userId;
  private password;
  private map:Map<String,String>;
  constructor(
    private customerService:CustomerService,
    private router: Router,
  ) { }
  ngOnInit() {
  }
  login(){
    this.customerService.userLogin(this.userId,this.password).subscribe(data=>{
      this.map=data;
      if(this.map['token']!=null){
        this.router.navigate(['/dashboard']);
        alert('登录成功');
        setTimeout(() => {
          localStorage.setItem('token',this.map['token']);
        }, 1000);
      }
      else{
        alert("用户名密码错误！");
      }
    });
  }
}
