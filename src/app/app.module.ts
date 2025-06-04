import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrimPipe } from './pipes/trim.pipe';
import { PipesComponent } from './components/demo/pipes/pipes.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    PipesComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
         TrimPipe , 
           ReactiveFormComponent 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
