import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { QuillModule } from 'ngx-quill'
import { WriteComponent } from './write.component'

export const routes: Routes = [{ path: '', component: WriteComponent }]

@NgModule({
  declarations: [WriteComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  exports: [WriteComponent],
})
export class WriteModule {}
