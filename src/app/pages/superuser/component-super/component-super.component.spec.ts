import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSuperComponent } from './component-super.component';

describe('ComponentSuperComponent', () => {
  let component: ComponentSuperComponent;
  let fixture: ComponentFixture<ComponentSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
