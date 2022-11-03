import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { SharedModule } from 'src/app/shared/shared.module'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule],
  exports: [LoginComponent, RegisterComponent],
})
export class PublicModule {}
