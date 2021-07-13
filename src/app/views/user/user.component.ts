import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/Iuser';
import * as fromStore from '../../store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user$: Observable<IUser>;
  constructor(private store: Store) {
    this.user$ = this.store.select(fromStore.getUser);
  }

  logoutHandler(): void {
    this.store.dispatch(new fromStore.logout());
  }

  ngOnInit(): void {}
}
