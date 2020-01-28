import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowResultsPageRoutingModule } from './show-results-routing.module';

import { ShowResultsPage } from './show-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowResultsPageRoutingModule
  ],
  declarations: [ShowResultsPage]
})
export class ShowResultsPageModule {}
