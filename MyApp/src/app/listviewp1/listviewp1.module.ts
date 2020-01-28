import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listviewp1PageRoutingModule } from './listviewp1-routing.module';

import { Listviewp1Page } from './listviewp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listviewp1PageRoutingModule
  ],
  declarations: [Listviewp1Page]
})
export class Listviewp1PageModule {}
