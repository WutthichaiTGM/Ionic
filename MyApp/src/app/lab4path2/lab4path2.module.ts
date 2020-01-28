import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab4path2PageRoutingModule } from './lab4path2-routing.module';

import { Lab4path2Page } from './lab4path2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab4path2PageRoutingModule
  ],
  declarations: [Lab4path2Page]
})
export class Lab4path2PageModule {}
