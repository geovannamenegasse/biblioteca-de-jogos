import { CadastroJogoModule } from './cadastro-jogo/cadastro-jogo.module';
import { JogoRoutingModule } from './jogo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JogoRoutingModule,
    CadastroJogoModule
  ]
})
export class JogoModule { }
