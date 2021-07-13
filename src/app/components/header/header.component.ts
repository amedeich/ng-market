import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { Observable } from 'rxjs';
import { LoginState } from 'src/app/store/reducers/login.reducer';
import * as fromStore from '../../store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showCart = false;
  placement: NzDrawerPlacement = 'right';
  user$: Observable<LoginState>;
  constructor(private store: Store) {
    this.user$ = this.store.select(fromStore.getUserState);
  }

  ngOnInit(): void {}

  openCart(): void {
    this.showCart = true;
  }

  closeCart(): void {
    this.showCart = false;
  }
}
