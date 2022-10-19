import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(){

    
    this.router.navigate(['/home'])
  }

  redirect2(){
    this.router.navigate(['/signup'])
  }

}
