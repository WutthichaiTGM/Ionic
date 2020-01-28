import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckBoxPageRoutingModule } from './check-box-routing.module';

import { CheckBoxPage } from './check-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckBoxPageRoutingModule
  ],
  declarations: [CheckBoxPage]
})
export class CheckBoxPageModule {}
