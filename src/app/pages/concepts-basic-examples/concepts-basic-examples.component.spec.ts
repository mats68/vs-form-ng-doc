import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsBasicExamplesComponent } from './concepts-basic-examples.component';

describe('ConceptsBasicExamplesComponent', () => {
  let component: ConceptsBasicExamplesComponent;
  let fixture: ComponentFixture<ConceptsBasicExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptsBasicExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsBasicExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
