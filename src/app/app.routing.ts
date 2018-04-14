import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'material',
    pathMatch: 'full'
  },
  {
    path: 'material',
    loadChildren: './views/poc-material/poc-material.module#PocMaterialModule'
  },
  {
    path: 'ngxbootstrap',
    loadChildren: './views/poc-ngx-bootstrap/poc-ngx-bootstrap.module#PocNgxBootstrapModule'
  },
  {
    path: 'prime',
    loadChildren: './views/poc-prime/poc-prime.module#PocPrimeModule'
  },
  {
    path: '**',
    redirectTo: 'material'
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
