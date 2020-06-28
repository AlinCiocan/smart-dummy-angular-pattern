import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotebookComponent } from './notebook/notebook.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { InfiniteScrollNotesComponent } from './infinite-scroll-notes/infinite-scroll-notes.component';
import { LoaderComponent } from './loader/loader.component';
import { NoteComponent } from './note/note.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NotebookComponent,
    MyNotesComponent,
    InfiniteScrollNotesComponent,
    LoaderComponent,
    NoteComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
