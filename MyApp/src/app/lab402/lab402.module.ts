import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab402PageRoutingModule } from './lab402-routing.module';

import { Lab402Page } from './lab402.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab402PageRoutingModule
  ],
  declarations: [Lab402Page]
})
export class Lab402PageModule {}
