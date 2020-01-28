import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listviewp1Page } from './listviewp1.page';

const routes: Routes = [
  {
    path: '',
    component: Listviewp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listviewp1PageRoutingModule {}
