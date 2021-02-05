import { HomeComponent } from './layouts/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // 404 - {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
