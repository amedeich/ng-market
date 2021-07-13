import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [UserComponent, OrdersComponent],
  imports: [CommonModule, UserRoutingModule, NzTabsModule, NzListModule, NzButtonModule],
})
export class UserModule {}
