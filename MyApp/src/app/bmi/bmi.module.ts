import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BMIPageRoutingModule } from './bmi-routing.module';

import { BMIPage } from './bmi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BMIPageRoutingModule
  ],
  declarations: [BMIPage]
})
export class BMIPageModule {}
