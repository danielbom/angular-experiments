import { Component, HostListener, OnInit, OnDestroy } from '@angular/core'
import { fromEvent, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { ToastService } from 'src/app/components/toast/toast.service'

const RELOAD_COUNT = 'reload-count'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject()

  title = 'angular-experiments'

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    const count = this.getCount()
    this.toastService.showInfo(`Reload times: ${count}`)
  }

  ngOnDestroy(): void {
    this._destroyed$.next(null)
    this._destroyed$.complete()
  }

  @HostListener('window:beforeunload')
  beforeUnload(): void {
    // https://stackoverflow.com/questions/63344293/how-to-run-a-function-when-a-page-refreshes-in-angular10-typescript
    const count = this.getCount() + 1
    localStorage.setItem(RELOAD_COUNT, count.toString())
  }

  getCount(): number {
    const maybeCount = localStorage.getItem(RELOAD_COUNT) ?? '0'
    const count = maybeCount.match(/^\d+$/) ? Number(maybeCount) : 0
    return count <= 0 ? 1 : count
  }

  keylogger(): void {
    fromEvent(document, 'keydown')
      .pipe(takeUntil(this._destroyed$))
      .subscribe((event: any) => {
        const message = JSON.stringify(
          {
            code: event.code,
            key: event.key,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
          },
          null,
          1,
        )
        this.toastService.showInfo(message)
      })
  }
}
