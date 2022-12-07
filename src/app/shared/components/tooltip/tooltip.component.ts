import { Component, Input, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-tooltip-content',
  template: '<ng-content></ng-content>',
})
export class TooltipContentComponent {}

@Component({
  selector: 'app-tooltip-hover',
  template: '<ng-content></ng-content>',
})
export class TooltipHoverComponent {}

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() direction: Direction = 'left'

  @ViewChild('hover')
  hoverEl?: ElementRef

	@ViewChild('tooltip')
  tooltipEl?: ElementRef

  // computed
  get i() {
    return this.position[this.direction][0]
  }

  get j() {
    return this.position[this.direction][1]
  }

  get vars() {
    return `--i: ${this.i}; --j: ${this.j}`
  }

  // fixed values
  private position: Record<Direction, [number, number]> = {
    top: [0.5, 0],
    left: [0, 0.5],
    bottom: [0.5, 1],
    right: [1, 0.5],
  }
}

export type Direction = 'left' | 'right' | 'top' | 'bottom'
