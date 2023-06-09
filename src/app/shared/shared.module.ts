import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// directives
import { ButtonDirective } from './directives/button/button.directive'
import { DragDirective } from './directives/drag/drag.directive'
import { DragHandleDirective } from './directives/drag/drag-handle.directive'

// components
import { TooltipComponent } from './components/tooltip/tooltip.component'
import { TooltipHoverComponent } from './components/tooltip/tooltip.component'
import { TooltipContentComponent } from './components/tooltip/tooltip.component'
import { BackgroundSliderComponent } from './components/background-slider/background-slider.component'

@NgModule({
  declarations: [
    ButtonDirective,
    DragDirective,
    DragHandleDirective,
    TooltipComponent,
    TooltipHoverComponent,
    TooltipContentComponent,
    BackgroundSliderComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonDirective,
    DragDirective,
    DragHandleDirective,
    TooltipComponent,
    TooltipHoverComponent,
    TooltipContentComponent,
    BackgroundSliderComponent,
  ],
})
export class SharedModule {}
