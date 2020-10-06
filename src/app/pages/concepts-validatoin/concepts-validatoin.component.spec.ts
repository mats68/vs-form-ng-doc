import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsValidatoinComponent } from './concepts-validatoin.component';

describe('ConceptsValidatoinComponent', () => {
  let component: ConceptsValidatoinComponent;
  let fixture: ComponentFixture<ConceptsValidatoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptsValidatoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsValidatoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
