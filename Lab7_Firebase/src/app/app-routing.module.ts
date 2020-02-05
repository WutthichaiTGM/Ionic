import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lab7-part2', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dbhomep1',
    loadChildren: () => import('./dbhomep1/dbhomep1.module').then( m => m.Dbhomep1PageModule)
  },
  {
    path: 'lab7-part2',
    loadChildren: () => import('./lab7-part2/lab7-part2.module').then( m => m.Lab7Part2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
