import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P1loginPageRoutingModule } from './p1login-routing.module';

import { P1loginPage } from './p1login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P1loginPageRoutingModule
  ],
  declarations: [P1loginPage]
})
export class P1loginPageModule {}
