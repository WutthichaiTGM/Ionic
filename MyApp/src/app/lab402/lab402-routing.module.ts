import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab402Page } from './lab402.page';

const routes: Routes = [
  {
    path: '',
    component: Lab402Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab402PageRoutingModule {}
