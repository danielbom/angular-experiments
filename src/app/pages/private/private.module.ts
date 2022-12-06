import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { SharedModule } from 'src/app/shared/shared.module'

import { HomeComponent } from './home/home.component'
import { SingleComponent } from './single/single.component'

@NgModule({
  declarations: [HomeComponent, SingleComponent],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  exports: [HomeComponent, SingleComponent],
})
export class PrivateModule {}
