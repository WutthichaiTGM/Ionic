import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P1loginPage } from './p1login.page';

const routes: Routes = [
  {
    path: '',
    component: P1loginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P1loginPageRoutingModule {}
