import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaremaPageRoutingModule } from './carema-routing.module';

import { CaremaPage } from './carema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaremaPageRoutingModule
  ],
  declarations: [CaremaPage]
})
export class CaremaPageModule {}
