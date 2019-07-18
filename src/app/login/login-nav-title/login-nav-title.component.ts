import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-nav-title',
  templateUrl: './login-nav-title.component.html',
  styleUrls: ['./login-nav-title.component.css']
})
export class LoginNavTitleComponent implements OnInit {

  private tabOne;
  private tabTwo;
  private tabThree;
  private countOne = 0;
  private countTwo = 0;  
  private countThree = 0;

  constructor() { }

  ngOnInit() {
  }

  //导航栏效果
  clickOne(){
    document.getElementById("tabTwo").style.display = "none";
    document.getElementById("tabThree").style.display = "none";
    this.countOne+=1;
    if(this.countOne==1){
      document.getElementById("tabOne").style.display = "inline-block";
      document.getElementById("down_arrowOne").style.transform = "rotate(-180deg)";
    }else{
      this.countOne=0;
      document.getElementById("tabOne").style.display = "none";
      document.getElementById("down_arrowOne").style.transform = "rotate(0)";
    }
  }

  clickTwo(){
    document.getElementById("tabOne").style.display = "none";
    document.getElementById("tabThree").style.display = "none";
    this.countTwo+=1;
    if(this.countTwo==1){
      document.getElementById("tabTwo").style.display = "inline-block";
      document.getElementById("down_arrowTwo").style.transform = "rotate(-180deg)";
     
    }else{
      this.countTwo=0;
      document.getElementById("tabTwo").style.display = "none";
      document.getElementById("down_arrowTwo").style.transform = "rotate(0)";
    }   
  }

  clickThree(){
    document.getElementById("tabOne").style.display = "none";
    document.getElementById("tabTwo").style.display = "none";
    this.countThree+=1;
    if(this.countThree==1){
      document.getElementById("tabThree").style.display = "inline-block";
      document.getElementById("down_arrowThree").style.transform = "rotate(-180deg)";
    }else{
      this.countThree=0;
      document.getElementById("tabThree").style.display = "none";
      document.getElementById("down_arrowThree").style.transform = "rotate(0)";
    }
  }

}
