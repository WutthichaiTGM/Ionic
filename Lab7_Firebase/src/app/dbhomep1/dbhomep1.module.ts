import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dbhomep1PageRoutingModule } from './dbhomep1-routing.module';

import { Dbhomep1Page } from './dbhomep1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dbhomep1PageRoutingModule
  ],
  declarations: [Dbhomep1Page]
})
export class Dbhomep1PageModule {}
