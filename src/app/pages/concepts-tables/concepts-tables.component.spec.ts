import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsTablesComponent } from './concepts-tables.component';

describe('ConceptsTablesComponent', () => {
  let component: ConceptsTablesComponent;
  let fixture: ComponentFixture<ConceptsTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptsTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
