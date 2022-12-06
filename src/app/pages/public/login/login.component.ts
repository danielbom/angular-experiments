import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil, filter } from 'rxjs/operators'
import { AppValidators } from 'src/app/shared/form'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  submitted = false
  formGroup = this.createForm()
  _destroy$ = new Subject<void>()

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formGroup.statusChanges
      .pipe(takeUntil(this._destroy$))
      .pipe(filter((value) => value === 'VALID'))
      .subscribe(() => {
        if (this.submitted) {
          this.submitted = false
        }
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next()
  }

  onSubmit() {
    this.submitted = true
    this.formGroup.markAllAsTouched()
    if (this.formGroup.valid) {
      this.router.navigate(['/'])
    }
  }

  isInvalid(field?: string): boolean {
    const control = field ? this.formGroup.get(field) : this.formGroup
    return this.submitted && !control?.valid
  }

  // computed
  get errorMessage(): string {
    const usernameError = this.formGroup.get('username')?.errors
    const passwordError = this.formGroup.get('password')?.errors
    const message = []
    if (usernameError) {
      if ('required' in usernameError) message.push('Username missing')
    }
    if (passwordError) {
      if ('required' in passwordError) message.push('Password missing')
      else if ('strongPassword' in passwordError)
        message.push('Password is too weak')
    }
    return message.map((it) => '• ' + it).join('<br/>')
  }

  // private
  private createForm() {
    return new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl(null, [
        Validators.required,
        AppValidators.strongPassword,
      ]),
    })
  }
}
