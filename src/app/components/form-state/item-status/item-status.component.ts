import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'app-item-status',
  templateUrl: './item-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemStatusComponent {
  @Input() label: string = ''
  @Input() value: boolean = true
}
