import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ToastComponent } from './components/toast/toast.component'

import { AppRoutingModule } from './app-routing.module'
import { LayoutModule } from './components/layout/layout.module'

import { PrivateModule as PrivatePagesModule } from './pages/private/private.module'
import { PublicModule as PublicPagesModule } from './pages/public/public.module'

@NgModule({
  declarations: [AppComponent, ToastComponent],
  imports: [
    BrowserModule,

    AppRoutingModule,
    LayoutModule,

    PrivatePagesModule,
    PublicPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
