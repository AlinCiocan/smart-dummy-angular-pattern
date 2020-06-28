import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollNotesComponent } from './infinite-scroll-notes.component';

describe('InfiniteScrollNotesComponent', () => {
  let component: InfiniteScrollNotesComponent;
  let fixture: ComponentFixture<InfiniteScrollNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
