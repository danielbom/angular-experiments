import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { QuillModule } from 'ngx-quill'

import { SharedModule } from 'src/app/shared/shared.module'

import { HomeComponent } from './home/home.component'
import { WriteComponent } from './write/write.component'
import { SingleComponent } from './single/single.component'

@NgModule({
  declarations: [HomeComponent, WriteComponent, SingleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    QuillModule.forRoot(),
  ],
  exports: [HomeComponent, WriteComponent, SingleComponent],
})
export class PrivateModule {}
