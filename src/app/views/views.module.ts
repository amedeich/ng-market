import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [ProductsModule, UserModule, LoginModule, CartModule],
  exports: [ProductsModule, UserModule, LoginModule, CartModule],
})
export class ViewsModule {}
