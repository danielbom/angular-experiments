import { Component, OnInit, OnDestroy } from '@angular/core'
import { fromEvent, Subject } from 'rxjs'
import { share, takeUntil } from 'rxjs/operators'
import { ToastService, Toast } from './toast.service'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject()

  toasts: Toast[] = []

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService
      .onToastsChange()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((toasts) => {
        this.toasts = toasts
      })
  }

  ngOnDestroy(): void {
    this._destroyed$.next(null)
    this._destroyed$.complete()
  }

  onClickToast(toast: Toast) {
    this.toastService.removeToast(toast.id)
  }
}
