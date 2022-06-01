import { JogoService } from './../jogo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-jogo',
  templateUrl: './cadastro-jogo.component.html',
  styleUrls: ['./cadastro-jogo.component.css']
})
export class CadastroJogoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: JogoService,
              private snackBar: MatSnackBar,
              private location: Location)
  {
    this.form = this.formBuilder.group({
      name: [null],
      genre: [null],
      description: [null],
      image: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.insertJogo(this.form.value)
      .subscribe(result => this.onSuccess(),
                 error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open("Publicação realizada com sucesso!", '', {duration : 5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open("Erro ao publicar cliente!", '', {duration : 5000});
  }

}
