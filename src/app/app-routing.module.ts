import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'rental', component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
