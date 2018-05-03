import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  @Input() pageTitle : string;
  @Input() isInEditMode : boolean;
  tab : number;

  ngOnInit() {
    this.tab = 1;
    if (this.isInEditMode)
    {
      this.pageTitle = "Create Report";
    }
    else
    {
      this.pageTitle = "View Report";
    }
  }

  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }

}
