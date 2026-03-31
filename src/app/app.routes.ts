import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./side-nav/side-nav').then((m) => m.SideNav),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home').then((m) => m.Home),
      },
      {
        path: 'setup',
        loadComponent: () => import('./setup/setup').then((m) => m.Setup),
      },
    ],
  },
];
