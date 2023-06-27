import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPetPage } from './cadastro-pet.page';

describe('CadastroPetPage', () => {
  let component: CadastroPetPage;
  let fixture: ComponentFixture<CadastroPetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
