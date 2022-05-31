import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { CadastroJogoComponent } from './cadastro-jogo/cadastro-jogo.component';
import { LojaComponent } from './loja/loja.component';


const routes: Routes = [
  { path: 'create', component: CadastroJogoComponent },
  { path: 'store', component: LojaComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoRoutingModule { }
