import { ElementRef } from '@angular/core'
import { DragDirective } from './drag.directive'

describe('DragDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef = {} as any
    const document_: Document = {} as any
    const directive = new DragDirective(elementRef, document_)
    expect(directive).toBeTruthy()
  })
})
