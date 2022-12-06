import { ElementRef } from '@angular/core'
import { DragHandleDirective } from './drag-handle.directive'

describe('DragHandleDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef = {} as any
    const directive = new DragHandleDirective(elementRef)
    expect(directive).toBeTruthy()
  })
})
