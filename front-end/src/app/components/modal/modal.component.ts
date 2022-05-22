import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  public title: string = '';
  @Input()
  public body:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
