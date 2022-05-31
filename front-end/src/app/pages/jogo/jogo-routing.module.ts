import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroJogoComponent } from './cadastro-jogo/cadastro-jogo.component';


const routes: Routes = [
  { path: 'create', component: CadastroJogoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoRoutingModule { }
