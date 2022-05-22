import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent implements OnInit {

  @Input()
  public id: string = '';
  @Input()
  public label: string = '';
  @Input()
  public placeholder: string = '';
  @Input()
  public disabled: boolean = false;
  @Input()
  public required: boolean = false;
  @Input()
  public textvalue: string = '';

  public focus: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public set value(value: string){
    this.textvalue = value;
    this.onChange(value);
    this.onTouched();
  }

  public get value(){
    return this.textvalue;
  }

  public onChange(_: any) { }
  public onTouched(): void { }

  public onFocus(): void{
    this.focus = true;
  }

  public onFocusOut(): void{
    this.focus = false;
  }

}
