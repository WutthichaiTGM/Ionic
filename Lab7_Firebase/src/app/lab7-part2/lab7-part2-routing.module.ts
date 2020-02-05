import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab7Part2Page } from './lab7-part2.page';

const routes: Routes = [
  {
    path: '',
    component: Lab7Part2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab7Part2PageRoutingModule {}
