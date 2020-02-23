import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab4path1PageRoutingModule } from './lab4path1-routing.module';

import { Lab4path1Page } from './lab4path1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab4path1PageRoutingModule
  ],
  declarations: [Lab4path1Page]
})
export class Lab4path1PageModule {}
