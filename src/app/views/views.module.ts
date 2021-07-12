import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
