import { NgModule } from '@angular/core'
import { BackgroundSliderExampleComponent } from './background-slider-example/background-slider-example.component'
import { ListExamplesComponent } from './list-examples/list-examples.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'examples',
    component: ListExamplesComponent,
  },
  {
    path: 'examples/background-slider',
    component: BackgroundSliderExampleComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ExamplesRoutingModule {}
