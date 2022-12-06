import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { FormStateComponent } from './form-state.component'
import { ItemStatusComponent } from './item-status/item-status.component'

import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [FormStateComponent, ItemStatusComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [FormStateComponent],
})
export class FormStateModule {}
