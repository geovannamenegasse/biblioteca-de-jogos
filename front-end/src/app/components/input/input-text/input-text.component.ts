import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

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
  public valid: boolean = false;

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
    this.isValid();
  }

  public isValid(): void{
    if(this.textvalue == ''){
      this.valid = false;
    }else{
      this.valid = true;
    }
  }

}
