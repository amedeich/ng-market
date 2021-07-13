import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./views/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
