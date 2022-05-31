import { JogoModule } from './pages/jogo/jogo.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExemploComponent } from './pages/exemplo/exemplo.component';
import { BibliotecaComponent } from './pages/jogo/biblioteca/biblioteca.component'
import { LoginComponent } from './pages/login/login.component';
import { LojaComponent } from './pages/loja/loja.component';

const routes: Routes = [
  { path: 'exemplo', component: ExemploComponent },
  { path: 'login', component: LoginComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'loja', component: LojaComponent },
  {
    path: 'client', //?
    loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'game', //?
    loadChildren: () => import('./pages/jogo/jogo.module').then(m => m.JogoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
