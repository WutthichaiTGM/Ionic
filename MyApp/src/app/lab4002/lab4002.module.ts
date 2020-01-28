import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab4002PageRoutingModule } from './lab4002-routing.module';

import { Lab4002Page } from './lab4002.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab4002PageRoutingModule
  ],
  declarations: [Lab4002Page]
})
export class Lab4002PageModule {}
