import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if(localStorage.getItem('token')==null){
      this.router.navigate(['/login']);
      alert("Please login in First!");
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
