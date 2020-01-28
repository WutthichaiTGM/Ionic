import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BMIPage } from './bmi.page';

const routes: Routes = [
  {
    path: '',
    component: BMIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BMIPageRoutingModule {}
