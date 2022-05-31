import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  public title: string = '';
  @Input()
  public type: string = "button";
  @Input()
  public color: string = 'secondary';
  @Input()
  public size: string = 'col-12';

  constructor() { }

  ngOnInit(): void {
  }

}
