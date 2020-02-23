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
  {
    path: 'lab4002',
    loadChildren: () => import('./lab4002/lab4002.module').then( m => m.Lab4002PageModule)
  },
  {
    path: 'lab4path2',
    loadChildren: () => import('./lab4path2/lab4path2.module').then( m => m.Lab4path2PageModule)
  },
  {
    path: 'buy/:dataBuy',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'carema',
    loadChildren: () => import('./carema/carema.module').then( m => m.CaremaPageModule)
  },
  {
    path: 'lab4path1',
    loadChildren: () => import('./lab4path1/lab4path1.module').then( m => m.Lab4path1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
