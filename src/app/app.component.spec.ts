import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

import { BrowserModule } from '@angular/platform-browser'

import { QuillModule } from 'ngx-quill'

import { routes } from './app-routing.module'

import { ToastComponent } from './components/toast/toast.component'

// layout
import { LayoutModule } from './components/layout/layout.module'

import { PrivateModule as PrivatePagesModule } from './pages/private/private.module'
import { PublicModule as PublicPagesModule } from './pages/public/public.module'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,

        RouterTestingModule.withRoutes(routes),
        LayoutModule,

        PrivatePagesModule,
        PublicPagesModule,
      ],
      declarations: [AppComponent, ToastComponent],
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

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-experiments app is running!',
    )
  })
})
