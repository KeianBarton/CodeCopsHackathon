import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  @Input() pageTitle : string;
  @Input() isInEditMode : boolean;
  tab : number;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.isInEditMode = this.route.snapshot.data['isInEditMode'];

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
