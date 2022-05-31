import { JogoModule } from './pages/jogo/jogo.module';
import { ClienteModule } from './pages/cliente/cliente.module';
import { ButtonModule } from './components/button/button.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { ExemploComponent } from './pages/exemplo/exemplo.component';
import { BibliotecaComponent } from './pages/jogo/biblioteca/biblioteca.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { InputModule } from './components/input/input.module';
import { FormModule } from './components/form/form.module';
import { CardJogoComponent } from './components/card/card-jogo/card-jogo.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './pages/login/login.component';
import { ContaClienteComponent } from './pages/cliente/conta-cliente/conta-cliente.component';
import { LojaComponent } from './pages/jogo/loja/loja.component';
import { HttpClientModule } from '@angular/common/http';
import { WindowRefService } from './pages/login/windowref.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ExemploComponent,
    BibliotecaComponent,
    LayoutComponent,
    NavbarComponent,
    CardJogoComponent,
    ModalComponent,
    LoginComponent,
    ContaClienteComponent,
    LojaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputModule,
    FormModule,
    ButtonModule,
    HttpClientModule,
    ClienteModule,
    JogoModule
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
