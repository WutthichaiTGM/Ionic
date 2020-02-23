import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputerPageRoutingModule } from './computer-routing.module';

import { ComputerPage } from './computer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputerPageRoutingModule
  ],
  declarations: [ComputerPage]
})
export class ComputerPageModule {}
