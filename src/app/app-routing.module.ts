import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeServiceComponent } from './components/bike-service/bike-service.component';

const routes: Routes = [{ path: '', component: BikeServiceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
