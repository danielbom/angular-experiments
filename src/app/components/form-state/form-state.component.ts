import { Component, OnInit, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

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
  @Input() control: AbstractControl | null = null

  show = true

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show
  }

  // computed
  get errors(): FieldError[] {
    return Object.entries(this.control?.errors || {}).map(([name, value]) => ({
      name,
      value,
    }))
  }
}
