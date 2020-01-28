import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SUBBMIPage } from './subbmi.page';

const routes: Routes = [
  {
    path: '',
    component: SUBBMIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SUBBMIPageRoutingModule {}
