import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { FormStateModule } from 'src/app/components/form-state/form-state.module'
import { SharedModule } from 'src/app/shared/shared.module'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    FormStateModule,
  ],
  exports: [LoginComponent, RegisterComponent],
})
export class PublicModule {}
