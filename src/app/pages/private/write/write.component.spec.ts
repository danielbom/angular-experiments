import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'

import { WriteComponent } from './write.component'

import { QuillModule } from 'ngx-quill'

describe('WriteComponent', () => {
  let component: WriteComponent
  let fixture: ComponentFixture<WriteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, QuillModule.forRoot()],
      declarations: [WriteComponent],
      providers: QuillModule.forRoot().providers,
    }).compileComponents()

    fixture = TestBed.createComponent(WriteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
