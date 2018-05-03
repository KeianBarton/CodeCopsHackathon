import { Component, OnInit } from '@angular/core';
import { ReportsService } from './reports.service';
import { IReport } from './IReport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  pageTitle = "Reports";
  reports : IReport[];
  lastId : number;

  constructor(private reportsService: ReportsService, private router : Router) { }

  ngOnInit() {
    this.reportsService.getReports()
      .subscribe(
        response => {
          this.reports = response;
          this.lastId = response.slice(-1)[0].id;
        },
        error => {
          console.log("getOfficers API call failed")
        }
      )
  }

  newReport() {
    if(this.lastId){
      this.router.navigate(['reports/create/' + (this.lastId + 1)]);
    }
    else
    {
      this.router.navigate(['reports/create/1']);
    }

  }

}
