import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { IOfficer } from './IOfficer';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = "Login"
  officers : IOfficer[];
  officerID : number;

  constructor(private loginService: LoginService, private sanitizer: DomSanitizer) { }

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

  officerIdMatches(officerId : number){
    return this.officerID === officerId;
  }

}
