import { BibliotecaService } from './../../../pages/jogo/biblioteca/biblioteca.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro-jogo',
  templateUrl: './form-cadastro-jogo.component.html',
  styleUrls: ['./form-cadastro-jogo.component.css']
})
export class FormCadastroJogoComponent implements OnInit {

  filePath: string = '';
  myForm: FormGroup = this.fb.group({
    nomeJogo  : [''],
    categoria : [''],
    descricao : [''],
    img : [null]
  });

  constructor(private fb: FormBuilder,
              private service: BibliotecaService) {
  }

  ngOnInit(): void {
  }

  imagePreview(event: any) {
    // const file = (event.target as HTMLInputElement).files[0];

    // this.myForm.patchValue({
    //   img: file
    // });

    // this.myForm.get(path: this.filePath).updateValueAndValidity()

    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.filePath = reader.result as string;
    // }
    // reader.readAsDataURL(file)
  }

  onSubmit() {
    this.service.insertJogo(this.myForm.value).subscribe(result => console.log(result), 
      error => this.onError());
  }

  private onError(){
    console.log('Erro ao salvar jogo');
  }
}
