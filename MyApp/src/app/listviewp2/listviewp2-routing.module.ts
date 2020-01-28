import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listviewp2Page } from './listviewp2.page';

const routes: Routes = [
  {
    path: '',
    component: Listviewp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listviewp2PageRoutingModule {}
