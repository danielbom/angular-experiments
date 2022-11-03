import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { SingleComponent } from './single.component'

describe('SingleComponent', () => {
  let component: SingleComponent
  let fixture: ComponentFixture<SingleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SingleComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SingleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
