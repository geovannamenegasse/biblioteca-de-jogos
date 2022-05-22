import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExemploRoutingModule } from './exemplo-routing.module';
import { ExemploComponent } from './exemplo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ExemploComponent,
  ],
  imports: [
    BrowserModule,
    ExemploRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ExemploComponent]
})
export class ExemploModule { }
