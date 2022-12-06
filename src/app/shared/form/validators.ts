import { AbstractControl } from '@angular/forms'
import { AppRawValidators } from './raw-validators'

export class AppValidators {
  static strongPassword(control: AbstractControl) {
    const error = AppRawValidators.strongPassword(control.value)
    if (error) return { strongPassword: error }
    return null
  }
}
