import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConexaoComponent } from './menu-conexao.component';

describe('MenuConexaoComponent', () => {
  let component: MenuConexaoComponent;
  let fixture: ComponentFixture<MenuConexaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConexaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuConexaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
