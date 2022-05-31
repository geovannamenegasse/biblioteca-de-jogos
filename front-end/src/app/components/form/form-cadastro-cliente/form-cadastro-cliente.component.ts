import { ClienteService } from './../../../pages/cliente/cliente.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro-cliente',
  templateUrl: './form-cadastro-cliente.component.html',
  styleUrls: ['./form-cadastro-cliente.component.css']
})
export class FormCadastroClienteComponent implements OnInit {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private service: ClienteService) { 
    this.form = this.formBuilder.group({
      name: [null],
      login: [null],
      password: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.insertCliente(this.form.value).subscribe(result => console.log(result), error => this.onError());
  }

  private onError(){
    console.log('Erro ao salvar cliente');
  }

}
