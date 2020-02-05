import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dbhomep1Page } from './dbhomep1.page';

const routes: Routes = [
  {
    path: '',
    component: Dbhomep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dbhomep1PageRoutingModule {}
