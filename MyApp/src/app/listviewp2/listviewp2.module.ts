import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listviewp2PageRoutingModule } from './listviewp2-routing.module';

import { Listviewp2Page } from './listviewp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listviewp2PageRoutingModule
  ],
  declarations: [Listviewp2Page]
})
export class Listviewp2PageModule {}
