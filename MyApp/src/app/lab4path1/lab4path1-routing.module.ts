import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab4path1Page } from './lab4path1.page';

const routes: Routes = [
  {
    path: '',
    component: Lab4path1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab4path1PageRoutingModule {}
