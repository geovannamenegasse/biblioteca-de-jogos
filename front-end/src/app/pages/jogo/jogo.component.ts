import { BibliotecaService } from './../biblioteca/biblioteca.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  public id!: number;
  public inscricao: Subscription = new Subscription;
  public jogo: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bibliotecaService: BibliotecaService) {
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.jogo = this.bibliotecaService.getJogo(this.id);

        if(this.jogo == null){
          this.router.navigate(['/biblioteca'])
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
