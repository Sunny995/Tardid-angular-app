import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = 
[
  {path: '', component: HomeComponent },
{path: 'home', component: HomeComponent },
{path: 'add', component: AddComponent },
{path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
