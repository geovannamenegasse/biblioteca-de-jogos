import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/pages/login/login.service';
import { ICustomWindow, WindowRefService } from 'src/app/pages/login/windowref.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  private _window: ICustomWindow;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: LoginService,
    private windowRef: WindowRefService)
  {
    this._window = windowRef.nativeWindow;
    this.form = this.formBuilder.group({
      login: [null],
      password: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.login(this.form.value).subscribe(result => {
      this._window.localStorage.setItem('token', result.token);   
      console.log(this._window.localStorage.getItem('token'));
    },
    error => this.onError());
  }

  private onError(){
    console.log('Erro ao fazer login');
  }
}
