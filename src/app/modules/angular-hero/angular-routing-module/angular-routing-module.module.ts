import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { WorldComponent } from '../world/world.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: WorldComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AngularRoutingModuleModule { }
