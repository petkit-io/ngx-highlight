import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHighlightComponent } from './ngx-highlight.component';

describe('NgxHighlightComponent', () => {
  let component: NgxHighlightComponent;
  let fixture: ComponentFixture<NgxHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
