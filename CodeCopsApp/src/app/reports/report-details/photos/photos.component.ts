import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs/Subject';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos : string[];
  @Output() onPhotosChange = new EventEmitter<Array<string>>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!this.photos)
      this.photos = new Array<string>();
  }

  public showCamera = false;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleCamera(): void {
    this.showCamera = !this.showCamera;
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.toggleCamera();
    this.photos.unshift(webcamImage.imageAsBase64);
    this.onPhotosChange.emit(this.photos);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
