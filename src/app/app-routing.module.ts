import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from './components/layout/layout.component'

import { HomeComponent } from './pages/private/home/home.component'
import { SingleComponent } from './pages/private/single/single.component'

import { LoginComponent } from './pages/public/login/login.component'
import { RegisterComponent } from './pages/public/register/register.component'

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'single',
        component: SingleComponent,
      },
      {
        path: 'write',
        loadChildren: () =>
          import('./pages/private/write/write.module').then(
            (m) => m.WriteModule,
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
