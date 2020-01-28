import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SUBBMIPageRoutingModule } from './subbmi-routing.module';

import { SUBBMIPage } from './subbmi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SUBBMIPageRoutingModule
  ],
  declarations: [SUBBMIPage]
})
export class SUBBMIPageModule {}
