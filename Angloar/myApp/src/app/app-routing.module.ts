import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { ArticlecomponentComponent } from './articlecomponent/articlecomponent.component';

const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component:HeadercomponentComponent },
  { path: 'about', component:NavcomponentComponent },
  { path: 'contact', component:ArticlecomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
