import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text/input-text.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputPasswordComponent } from './input-password/input-password.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputEmailComponent,
    InputTextareaComponent,
    InputPasswordComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    InputTextComponent,
    InputEmailComponent,
    InputTextareaComponent,
    InputPasswordComponent
  ]
})
export class InputModule { }
