import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Note } from '../firebase';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  constructor() { }

  ngOnInit(): void {
  }

  log(text) {
    console.log(text);
  }

}
