import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginState } from 'src/app/store/reducers/login.reducer';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  validateForm!: FormGroup;
  user$: Observable<LoginState>;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (!this.validateForm.valid) {
      return;
    }
    const { value: email } = this.validateForm.controls.email;
    const { value: password } = this.validateForm.controls.password;
    this.store.dispatch(new fromStore.LoginLoad({ email, password }));
  }

  constructor(private fb: FormBuilder, private store: Store) {
    this.user$ = this.store.select(fromStore.getUserState);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
