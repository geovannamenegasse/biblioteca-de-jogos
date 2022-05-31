import { ButtonModule } from './../../../components/button/button.module';
import { CadastroClienteComponent } from './cadastro-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CadastroClienteComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class CadastroClienteModule { }
