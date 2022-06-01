import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastroJogoModule } from './cadastro-jogo/cadastro-jogo.module';
import { JogoRoutingModule } from './jogo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JogoRoutingModule,
    CadastroJogoModule,
    MatSnackBarModule
  ]
})
export class JogoModule { }
