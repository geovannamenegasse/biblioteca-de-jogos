import { ClienteService } from './../cliente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ClienteService) 
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
    this.service.insertCliente(this.form.value).subscribe(result => console.log(result), 
    error => this.onError());
  }

  private onError(){
    console.log('Erro ao salvar cliente');
  }
}
