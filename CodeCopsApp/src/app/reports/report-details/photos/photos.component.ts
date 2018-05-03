import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos : string[];
  @Output() onPhotosChange = new EventEmitter<Array<string>>();

  ngOnInit() {
  }

}
