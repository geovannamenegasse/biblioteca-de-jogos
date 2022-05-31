import { CadastroClienteComponent } from './cadastro-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './../../../components/form/form.module';
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
    ReactiveFormsModule
  ]
})
export class CadastroClienteModule { }
