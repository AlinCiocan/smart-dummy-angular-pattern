import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotebookComponent } from './notebook/notebook.component';
import { MyNotesComponent } from './my-notes/my-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotebookComponent,
    MyNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
