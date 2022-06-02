import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, Observable, of } from 'rxjs';
import { Jogo } from '../jogo';
import { JogoService } from '../jogo.service';
import { LojaService } from './loja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  modalRef?: BsModalRef;
  message?: string;

  public jogos$: Observable<Jogo[]>;

  constructor(private jogoService: JogoService,
    private modalService: BsModalService,
    private snackBar: MatSnackBar) {
    this.jogos$ = this.jogoService.getJogos()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );

  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.snackBar.open("Jogo adquirido com sucesso!", '', {duration : 5000});
    this.modalRef?.hide();
  }

  decline(): void {
    // this.message = 'Declined!';
    this.modalRef?.hide();
  }
}
