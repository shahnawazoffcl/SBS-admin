import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeServiceComponent } from './components/bike-service/bike-service.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BikeServiceComponent ,canActivate: [AuthGuard]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
