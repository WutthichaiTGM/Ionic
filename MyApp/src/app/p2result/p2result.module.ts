import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P2resultPageRoutingModule } from './p2result-routing.module';

import { P2resultPage } from './p2result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P2resultPageRoutingModule
  ],
  declarations: [P2resultPage]
})
export class P2resultPageModule {}
