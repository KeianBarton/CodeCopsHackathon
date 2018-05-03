import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReport } from '../IReport';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit, IReport {

  @Input() pageTitle : string;
  @Input() isInEditMode : boolean;

  @Input() location : string[];
  @Input() photos : string[];
  @Input() notes : string;

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

  handleNotesChange(text : string){
    this.notes = text;
  }

}
