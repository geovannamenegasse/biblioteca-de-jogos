import { Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit } from '@angular/core';
import { NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputTextComponent),
    }
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {

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
  public control: NgControl;

  constructor(@Inject(INJECTOR) private injector: Injector) { 
    this.control = this.injector.get(NgControl);
  }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // this.control = this.injector.get(NgControl);
  }

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
