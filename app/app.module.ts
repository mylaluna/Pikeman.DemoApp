import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    DemoComponent  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
