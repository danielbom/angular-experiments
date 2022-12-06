import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// directives
import { ButtonDirective } from './directives/button.directive'
import { DragDirective } from './directives/drag/drag.directive'
import { DragHandleDirective } from './directives/drag/drag-handle.directive'

@NgModule({
  declarations: [ButtonDirective, DragDirective, DragHandleDirective],
  imports: [CommonModule],
  exports: [ButtonDirective, DragDirective, DragHandleDirective],
})
export class SharedModule {}
