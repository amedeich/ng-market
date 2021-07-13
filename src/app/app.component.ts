import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from './store/reducers/login.reducer';
import * as fromStore from './store';
import * as fromLoginActions from './store/actions/login.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'marketplace';
  user$: Observable<LoginState>;
  constructor(private store: Store, public router: Router) {
    this.user$ = this.store.select(fromStore.getUserState);
  }

  ngOnInit(): void {
    this.initDataStore();
  }

  initDataStore(): void {
    const marketData = localStorage.getItem('market_data');
    if (marketData) {
      this.store.dispatch(new fromLoginActions.LoginComplete(JSON.parse(marketData)));
    }
  }
}
