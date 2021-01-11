import { Component, ElementRef,  EventEmitter,    Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl:'./hello.component.html' ,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Output('eventoRestituzione') restituiscoValore =  new EventEmitter<number>();

  onClick(valore:HTMLInputElement){
    this.restituiscoValore.emit(parseFloat(valore.value));
  }
}
