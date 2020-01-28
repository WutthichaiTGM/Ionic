import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P2resultPage } from './p2result.page';

const routes: Routes = [
  {
    path: '',
    component: P2resultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P2resultPageRoutingModule {}
