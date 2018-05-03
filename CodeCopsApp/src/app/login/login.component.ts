import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { IOfficer } from './IOfficer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = "Login"
  officers : IOfficer[]

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getOfficers()
      .subscribe(
        response => {
          this.officers = response;
        },
        error => {
          console.log("getOfficers API call failed")
        }
      )
  }

}
