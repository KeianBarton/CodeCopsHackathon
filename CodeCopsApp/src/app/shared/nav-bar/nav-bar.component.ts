import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() isInReportDetailsView : boolean;
  @Input() pageTitle : string;

  constructor(private router : Router) {}

  ngOnInit() {
  }

  goBackToReports() {
    this.router.navigate(['reports']);
  }

}
