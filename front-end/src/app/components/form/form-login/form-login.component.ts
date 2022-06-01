import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private windowRef: WindowRefService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router)
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
      this.onSuccess();
    },
    error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open("Login realizado com sucesso!", '', {duration : 5000});
    this.router.navigate(['/biblioteca']);
  }

  private onError(){
    this.snackBar.open("Erro ao fazer login!", '', {duration : 5000});
  }
}
