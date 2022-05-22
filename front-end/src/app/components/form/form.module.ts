import { ButtonModule } from './../button/button.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { InputModule } from '../input/input.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [
    FormLoginComponent,
  ],
  imports: [
    FormsModule,
    InputModule,
    ButtonModule,
    FormRoutingModule
  ],
  exports: [ 
    FormLoginComponent
  ]
})
export class FormModule { }
