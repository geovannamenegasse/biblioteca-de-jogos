import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
