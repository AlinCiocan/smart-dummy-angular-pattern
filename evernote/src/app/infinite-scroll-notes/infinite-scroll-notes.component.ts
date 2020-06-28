import { Component, OnInit } from '@angular/core';
import { retrieveNotes, Note } from '../firebase';
import { hasReachedBottomOfPage } from '../utils';

@Component({
  selector: 'app-infinite-scroll-notes',
  templateUrl: './infinite-scroll-notes.component.html',
  styleUrls: ['./infinite-scroll-notes.component.css']
})
export class InfiniteScrollNotesComponent implements OnInit {
  notes: Note[] = [];
  isLoading: boolean;
  constructor() { }

  ngOnInit(): void {
    this.loadMore();

    window.addEventListener('scroll', () => {
      if(hasReachedBottomOfPage() && !this.isLoading) {
        this.loadMore();
      }
    });
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
