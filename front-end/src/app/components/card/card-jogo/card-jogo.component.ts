import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-jogo',
  templateUrl: './card-jogo.component.html',
  styleUrls: ['./card-jogo.component.css']
})
export class CardJogoComponent implements OnInit {

  @Input()
  public title: string = '';
  @Input()
  public img: string = '';
  @Input()
  public link: string = '';

  constructor() { }

  ngOnInit(): void { }

}
