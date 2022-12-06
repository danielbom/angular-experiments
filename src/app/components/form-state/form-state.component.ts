import { Component, OnInit, Input } from '@angular/core'
import { AbstractControl, FormGroup } from '@angular/forms'

type FieldError = {
  name: string
  value: unknown
}

@Component({
  selector: 'app-form-state',
  templateUrl: './form-state.component.html',
  styleUrls: ['./form-state.component.scss'],
})
export class FormStateComponent implements OnInit {
  @Input() control?: AbstractControl

  show = true

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show
  }

  logForm() {
    console.log(this.control)
  }

  _extractErrors(
    prefix: string,
    control: AbstractControl | undefined,
  ): FieldError[] {
    return Object.entries(control?.errors || {}).map(([name, value]) => ({
      name: prefix + name,
      value,
    }))
  }

  _extractErrorsRec(
    prefix: string,
    control: AbstractControl | undefined,
  ): FieldError[] {
    if (!control) return []

    const errors: FieldError[] = this._extractErrors(prefix, control)

    const controls: Record<string, AbstractControl> = (control as FormGroup)
      .controls
    if (!controls) return errors

    const innerErrors = Object.entries(controls).flatMap(([name, value]) =>
      this._extractErrorsRec(prefix + name + '.', value),
    )

    return errors.concat(innerErrors)
  }

  // computed
  get errors(): FieldError[] {
    return this._extractErrorsRec('_.', this.control)
  }

  get formGroup(): FormGroup | undefined {
    return this.control as FormGroup
  }
}
