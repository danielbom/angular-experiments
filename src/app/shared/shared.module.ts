import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// directives
import { ButtonDirective } from './directives/button.directive'

@NgModule({
  declarations: [ButtonDirective],
  imports: [CommonModule],
  exports: [ButtonDirective],
})
export class SharedModule {}
