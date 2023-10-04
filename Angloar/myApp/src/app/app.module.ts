import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { ArticlecomponentComponent } from './articlecomponent/articlecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HeadercomponentComponent,
    NavcomponentComponent,
    ArticlecomponentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
