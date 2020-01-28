import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab4path2Page } from './lab4path2.page';

const routes: Routes = [
  {
    path: '',
    component: Lab4path2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab4path2PageRoutingModule {}
