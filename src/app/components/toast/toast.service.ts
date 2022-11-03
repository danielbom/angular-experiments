import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject, of } from 'rxjs'
import { share, mergeMap, scan, concat, delay, tap } from 'rxjs/operators'
import { ToastId, Toast, ToastAdd, ToastAction, ToastState } from './types'

import { generateId } from 'src/app/functions/generateId'

const TOAST_DELAY = 4000
const INITIAL_STATE: ToastState = []

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _action$ = new Subject<ToastAction>()

  private _store$ = this._action$.pipe(
    mergeMap((action) => this.addAutoExpire(action)),
    scan(this.reducer, INITIAL_STATE),
    share(),
  )
  private _state$ = new BehaviorSubject(INITIAL_STATE)

  constructor() {
    this._store$.subscribe(this._state$)
  }

  showInfo(message: string) {
    this.showToast({ message, type: 'info' })
  }
  showSuccess(message: string) {
    this.showToast({ message, type: 'success' })
  }
  showWarning(message: string) {
    this.showToast({ message, type: 'warning' })
  }
  showError(message: string) {
    this.showToast({ message, type: 'error' })
  }

  removeToast(id: ToastId) {
    this._action$.next({ type: 'remove', payload: id })
  }

  onToastsChange = () => this._state$

  private showToast(add: ToastAdd) {
    this._action$.next({ type: 'add', payload: { ...add, id: generateId() } })
  }

  private reducer(
    state: ToastState = INITIAL_STATE,
    action: ToastAction,
  ): ToastState {
    switch (action.type) {
      case 'add': {
        return [action.payload, ...state]
      }
      case 'remove': {
        return state.filter((it) => it.id !== action.payload)
      }
    }
  }

  private addAutoExpire(action: ToastAction): Observable<ToastAction> {
    if (action.type === 'add') {
      const actionRemove: ToastAction = {
        type: 'remove',
        payload: action.payload.id,
      }
      const add$ = of(action)
      const remove$ = of(actionRemove).pipe(delay(TOAST_DELAY))
      return add$.pipe(concat(remove$))
    } else {
      return of(action)
    }
  }
}

export { Toast }
