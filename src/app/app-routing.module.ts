import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SignInComponent } from './home/signin/signin.component';

const routes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'home/:user', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
