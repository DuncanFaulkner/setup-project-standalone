import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'some-other-page',
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home/home.routes').then(
  //       (m) => m.HOME_ROUTES
  //     ),
  // },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
];
