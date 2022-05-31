import { JogoService } from './../jogo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-jogo',
  templateUrl: './cadastro-jogo.component.html',
  styleUrls: ['./cadastro-jogo.component.css']
})
export class CadastroJogoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: JogoService) 
  {
    this.form = this.formBuilder.group({
      name: [null],
      genre: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.insertJogo(this.form.value).subscribe(result => console.log(result), 
    error => this.onError());
  }

  private onError(){
    console.log('Erro ao salvar jogo');
  }

}
