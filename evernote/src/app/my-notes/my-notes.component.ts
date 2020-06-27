import { Component, OnInit } from '@angular/core';
import { retrieveNotes, Note } from '../firebase';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent implements OnInit {
  notes: Note[] = [];
  isLoading: boolean;
  constructor() { }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;
    const from = this.notes.length;

    retrieveNotes(from).then((newNotes:Note[]) => {
      this.notes = [...this.notes, ...newNotes]
      this.isLoading = false;
    });
  }

}
