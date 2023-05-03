import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BackgroundSliderExampleModule } from './background-slider-example/background-slider-example.module'
import { ListExamplesComponent } from './list-examples/list-examples.component'
import { ExamplesRoutingModule } from './examples-rounting.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [ListExamplesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ExamplesRoutingModule,
    BackgroundSliderExampleModule,
  ],
})
export class ExamplesModule {}
