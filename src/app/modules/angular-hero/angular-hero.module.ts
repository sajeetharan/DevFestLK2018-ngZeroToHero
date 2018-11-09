import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { WorldComponent } from './world/world.component';
import { HomeComponent } from './home/home.component';
import { GoombaComponent } from './goomba/goomba.component';
import { AppComponent } from './app/app.component';
import { CharacterComponent } from './character/character.component';
import { AngularRoutingModuleModule } from './angular-routing-module/angular-routing-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WorldComponent, HomeComponent, GoombaComponent, AppComponent, CharacterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AngularRoutingModuleModule
  ],
  bootstrap: [AppComponent]
})
export class AngularHeroModule { }
