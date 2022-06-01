import { ClienteService } from './../cliente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ClienteService,
              private snackBar: MatSnackBar,
              private location: Location)
  {
    this.form = this.formBuilder.group({
      name: [null],
      login: [null],
      password: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.insertCliente(this.form.value)
      .subscribe(result => this.onSuccess(),
                 error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open("Cadastro realizado com sucesso!", '', {duration : 5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open("Erro ao cadastrar cliente!", '', {duration : 5000});
  }
}
