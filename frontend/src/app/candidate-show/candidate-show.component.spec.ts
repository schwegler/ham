import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateShowComponent } from './candidate-show.component';

describe('CandidateShowComponent', () => {
  let component: CandidateShowComponent;
  let fixture: ComponentFixture<CandidateShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
