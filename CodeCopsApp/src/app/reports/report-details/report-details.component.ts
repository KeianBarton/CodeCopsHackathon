import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReport } from '../IReport';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit, IReport {

  @Input() pageTitle : string;
  @Input() isInEditMode : boolean;

  @Input() title : string;
  @Input() location : number[];
  @Input() photos : string[];
  @Input() notes : string;

  id: number;
  tab : number;

  constructor(private route: ActivatedRoute,
              private reportsService : ReportsService,
              private router : Router
            ) {}
  
  ngOnInit() {
    this.isInEditMode = this.route.snapshot.data['isInEditMode'];
    this.id = this.route.snapshot.params['id'];

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

  handleLocationChange(coords : number[]){
    this.location = coords;
  }

  handlePhotosChange(photos : string[]){
    this.photos = photos;
  }

  saveReport()
  {
    var report = {
      id : this.id,
      title : this.title,
      location : this.location,
      photos : this.photos,
      notes : this.notes
    };
    this.reportsService.postReport(report);
    this.router.navigate(['reports']);
  }

}
