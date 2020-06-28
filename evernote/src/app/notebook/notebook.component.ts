import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  readonly classicDisplay = 'classic';
  readonly infiniteDisplay = 'infinite';

  displayType = this.classicDisplay;


  constructor() { }

  ngOnInit(): void {
  }


  changeDisplay(newDisplay) {
    this.displayType = newDisplay;
    console.log(this.displayType);
  }

}
