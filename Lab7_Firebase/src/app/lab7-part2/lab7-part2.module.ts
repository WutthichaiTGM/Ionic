import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab7Part2PageRoutingModule } from './lab7-part2-routing.module';

import { Lab7Part2Page } from './lab7-part2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab7Part2PageRoutingModule
  ],
  declarations: [Lab7Part2Page]
})
export class Lab7Part2PageModule {}
