import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appDragHandle]',
})
export class DragHandleDirective {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
