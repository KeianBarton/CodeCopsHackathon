import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes : string;
  @Input() isInEditMode : boolean;

  @Output() onNotesChange = new EventEmitter<string>();

  saveText() {
    this.onNotesChange.emit(this.notes);
  }

  ngOnInit() {
  }

}
