import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegispagePageRoutingModule } from './regispage-routing.module';

import { RegispagePage } from './regispage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegispagePageRoutingModule
  ],
  declarations: [RegispagePage]
})
export class RegispagePageModule {}
