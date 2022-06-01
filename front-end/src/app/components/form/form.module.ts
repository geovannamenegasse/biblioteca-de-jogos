import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonModule } from './../button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { InputModule } from '../input/input.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRoutingModule } from './form-routing.module';
import { FormCadastroClienteComponent } from './form-cadastro-cliente/form-cadastro-cliente.component';
import { FormCadastroJogoComponent } from './form-cadastro-jogo/form-cadastro-jogo.component';

@NgModule({
  declarations: [
    FormLoginComponent,
    FormCadastroClienteComponent,
    FormCadastroJogoComponent,
  ],
  imports: [
    FormsModule,
    InputModule,
    ButtonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    FormLoginComponent,
    FormCadastroClienteComponent,
    FormCadastroJogoComponent
  ]
})
export class FormModule { }
