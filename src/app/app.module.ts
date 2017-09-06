import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AlertModule } from 'ngx-bootstrap';
import { CountoModule }  from 'angular2-counto';
import { ChartsModule } from 'ng2-charts';
import { FlotModule } from 'ng2modules-flot';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AlertModule.forRoot(),
    CountoModule,
    ChartsModule,
    FlotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
