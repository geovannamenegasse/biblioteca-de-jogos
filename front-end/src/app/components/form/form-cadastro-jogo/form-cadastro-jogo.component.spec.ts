import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroJogoComponent } from './form-cadastro-jogo.component';

describe('FormCadastroJogoComponent', () => {
  let component: FormCadastroJogoComponent;
  let fixture: ComponentFixture<FormCadastroJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCadastroJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
