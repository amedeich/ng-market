import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ProductsComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class ProductsRoutingModule { }
