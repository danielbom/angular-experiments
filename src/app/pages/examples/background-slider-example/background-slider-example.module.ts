import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from 'src/app/shared/shared.module'

import { BackgroundSliderExampleComponent } from './background-slider-example.component'

@NgModule({
  declarations: [BackgroundSliderExampleComponent],
  imports: [CommonModule, SharedModule],
})
export class BackgroundSliderExampleModule {}
