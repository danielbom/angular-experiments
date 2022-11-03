import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { QuillModule } from 'ngx-quill'

import { routes } from './app-routing.module'

import { ToastComponent } from './components/toast/toast.component'

// layout
import { LayoutComponent } from './components/layout/layout.component'
import { FooterComponent } from './components/layout/footer/footer.component'
import { NavbarComponent } from './components/layout/navbar/navbar.component'

import { HomeComponent } from './pages/home/home.component'
import { WriteComponent } from './pages/write/write.component'
import { SingleComponent } from './pages/single/single.component'

import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { ButtonDirective } from './directives/button.directive'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        QuillModule.forRoot(),
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        // root
        AppComponent,
        // root components
        ToastComponent,

        HomeComponent,
        RegisterComponent,

        LoginComponent,
        WriteComponent,
        SingleComponent,

        // Layout
        LayoutComponent,
        NavbarComponent,
        FooterComponent,
        ButtonDirective,
      ],
      // https://github.com/KillerCodeMonkey/ngx-quill/issues/533
      providers: QuillModule.forRoot().providers,
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'angular-experiments'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('angular-experiments')
  })

  //it('should render title', () => {
  //const fixture = TestBed.createComponent(AppComponent)
  //fixture.detectChanges()
  //const compiled = fixture.nativeElement as HTMLElement
  //expect(compiled.querySelector('.content span')?.textContent).toContain(
  //'angular-experiments app is running!',
  //)
  //})
})
