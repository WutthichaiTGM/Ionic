import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'regispage',
    loadChildren: () => import('./regispage/regispage.module').then( m => m.RegispagePageModule)
  },
  {
    path: 'check-box',
    loadChildren: () => import('./check-box/check-box.module').then( m => m.CheckBoxPageModule)
  },
  {
    path: 'p1login',
    loadChildren: () => import('./p1login/p1login.module').then( m => m.P1loginPageModule)
  },
  {
    path: 'p2result/:dataObj',
    loadChildren: () => import('./p2result/p2result.module').then( m => m.P2resultPageModule)
  },
  {
    path: 'bmi',
    loadChildren: () => import('./bmi/bmi.module').then( m => m.BMIPageModule)
  },
  {
    path: 'subbmi/:dataBMI',
    loadChildren: () => import('./subbmi/subbmi.module').then( m => m.SUBBMIPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'show-results/:data',
    loadChildren: () => import('./show-results/show-results.module').then( m => m.ShowResultsPageModule)
  },
  {
    path: 'listviewp1/:data',
    loadChildren: () => import('./listviewp1/listviewp1.module').then( m => m.Listviewp1PageModule)
  },
  {
    path: 'listviewp2',
    loadChildren: () => import('./listviewp2/listviewp2.module').then( m => m.Listviewp2PageModule)
  },
  {
    path: 'lab402',
    loadChildren: () => import('./lab402/lab402.module').then( m => m.Lab402PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
