import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { LayoutComponent } from './layout.component'
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LayoutComponent],
  imports: [RouterModule, CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
