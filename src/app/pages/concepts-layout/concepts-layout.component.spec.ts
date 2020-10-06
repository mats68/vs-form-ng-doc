import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsLayoutComponent } from './concepts-layout.component';

describe('ConceptsLayoutComponent', () => {
  let component: ConceptsLayoutComponent;
  let fixture: ComponentFixture<ConceptsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
