import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createAccountState } from 'src/app/store/reducers/create-account.reducer';
import * as fromStore from '../../../../store'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  validateForm!: FormGroup;
  createUser$: Observable<createAccountState>
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
    const {value: name} = this.validateForm.controls.name
    const {value: email} = this.validateForm.controls.email
    const {value: password} = this.validateForm.controls.password

    console.log(name, email, password)
    this.store.dispatch(new fromStore.createAccountLoad({name, email, password}))
  }
  constructor(private fb: FormBuilder, private store: Store) {
    this.createUser$ = this.store.select(fromStore.getCreateUserState)
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
}
