import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExemploComponent } from './pages/exemplo/exemplo.component';
import { BibliotecaComponent } from './pages/jogo/biblioteca/biblioteca.component'
import { LoginComponent } from './pages/login/login.component';
import { CadastroClienteComponent } from './pages/cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroJogoComponent } from './pages/jogo/cadastro-jogo/cadastro-jogo.component';
import { ContaClienteComponent } from './pages/cliente/conta-cliente/conta-cliente.component';
import { LojaComponent } from './pages/loja/loja.component';

const routes: Routes = [
  { path: 'exemplo', component: ExemploComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jogo', component: CadastroJogoComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'loja', component: LojaComponent },
  {
    path: 'client', //?
    loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
