import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompIndexComponent } from './comp-index.component';

describe('CompIndexComponent', () => {
  let component: CompIndexComponent;
  let fixture: ComponentFixture<CompIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
