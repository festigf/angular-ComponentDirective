import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BetterHighlightDirective } from './better-highlight-directive';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BetterHighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
