import { ButtonModule } from './components/button/button.module';
import { BibliotecaService } from './pages/biblioteca/biblioteca.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { ExemploComponent } from './pages/exemplo/exemplo.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { JogoComponent } from './pages/jogo/jogo.component';
import { InputModule } from './components/input/input.module';
import { FormModule } from './components/form/form.module';
import { CardJogoComponent } from './components/card/card-jogo/card-jogo.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroClienteComponent } from './pages/cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroJogoComponent } from './pages/jogo/cadastro-jogo/cadastro-jogo.component';
import { ContaClienteComponent } from './pages/cliente/conta-cliente/conta-cliente.component';
import { LojaComponent } from './pages/loja/loja.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ExemploComponent,
    BibliotecaComponent,
    LayoutComponent,
    NavbarComponent,
    JogoComponent,
    CardJogoComponent,
    ModalComponent,
    LoginComponent,
    CadastroClienteComponent,
    CadastroJogoComponent,
    ContaClienteComponent,
    LojaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputModule,
    FormModule,
    ButtonModule
  ],
  providers: [BibliotecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
