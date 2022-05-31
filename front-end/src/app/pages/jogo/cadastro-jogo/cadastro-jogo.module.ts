import { ButtonModule } from './../../../components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CadastroJogoComponent } from './cadastro-jogo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CadastroJogoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class CadastroJogoModule { }
