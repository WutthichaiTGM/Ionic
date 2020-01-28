import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab4002Page } from './lab4002.page';

const routes: Routes = [
  {
    path: '',
    component: Lab4002Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab4002PageRoutingModule {}
