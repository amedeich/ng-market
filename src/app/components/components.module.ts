import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { DirectivesModule } from '../directives/directives.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderComponent } from './header/header.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { RouterModule } from '@angular/router';
import { CartModule } from '../views/cart/cart.module';

@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent
  ],
  exports: [
    ProductComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CartModule,
    RouterModule,
    DirectivesModule,
    NzIconModule,
    NzInputModule,
    NzCardModule,
    NzButtonModule,
    NzDrawerModule
  ]
})
export class ComponentsModule { }
