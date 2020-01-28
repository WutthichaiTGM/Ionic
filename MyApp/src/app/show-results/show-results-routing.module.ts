import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowResultsPage } from './show-results.page';

const routes: Routes = [
  {
    path: '',
    component: ShowResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowResultsPageRoutingModule {}
