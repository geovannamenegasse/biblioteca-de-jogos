import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ClienteRoutingModule } from './cliente-routing.module';
import { CadastroClienteModule } from './cadastro-cliente/cadastro-cliente.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CadastroClienteModule,
    ClienteRoutingModule,
    MatSnackBarModule
  ]
})
export class ClienteModule { }
