import { Component, OnInit } from '@angular/core';
import { ReportsService } from './reports.service';
import { IReport } from './IReport';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  pageTitle = "Reports"
  reports : IReport[]

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.reportsService.getReports()
      .subscribe(
        response => {
          this.reports = response;
        },
        error => {
          console.log("getOfficers API call failed")
        }
      )
  }

}
