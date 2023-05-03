import { Component, HostListener, Input } from '@angular/core'

@Component({
  selector: 'app-background-slider',
  templateUrl: './background-slider.component.html',
  styleUrls: ['./background-slider.component.scss'],
})
export class BackgroundSliderComponent {
  @Input()
  images: string[] = []

  current = 0
  fullPage = true

  onLeft(): void {
    this.current = this._computeNextPosition().left
  }

  onRight(): void {
    this.current = this._computeNextPosition().right
  }

  private _computeNextPosition(): NextPosition {
    const count = this.images.length
    const last = count - 1

    if (this.current === 0) {
      return {
        right: last,
        left: 1,
      }
    } else if (this.current === last) {
      return {
        right: this.current - 1,
        left: 0,
      }
    } else {
      return {
        right: this.current - 1,
        left: this.current + 1,
      }
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        this.onRight()
        break
      case 'ArrowLeft':
        this.onLeft()
        break
    }
  }
}

type NextPosition = {
  left: number
  right: number
}
