import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from './store/reducers/login.reducer';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marketplace';
  user$: Observable<LoginState>;
  constructor(private store: Store) {
    this.user$ = this.store.select(fromStore.getUserState);
  }
}
