import { DOCUMENT } from '@angular/common'
import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
} from '@angular/core'
import { fromEvent, Subject } from 'rxjs'
import { takeUntil, scan } from 'rxjs/operators'
import { DragHandleDirective } from './drag-handle.directive'
import { Coord, State, Action } from './types'
import {
  coordClamp,
  coordCenter,
  coordSub,
  coordFromEvent,
  coordsOfElement,
  coordDimensionFromElement,
  INITIAL_STATE,
  DEFAULT_DRAG_BOUNDARY_QUERY,
} from './_internals'

@Directive({
  selector: '[appDrag]',
})
export class DragDirective implements AfterViewInit, OnDestroy {
  private _destroy$ = new Subject<void>()

  private _dragRef: HTMLElement | null = null
  private _dragHandleRef: HTMLElement | null = null

  private _action$ = new Subject<Action>()
  private _store$ = this._action$
    .pipe(scan((state, action) => this.reducer(state, action), INITIAL_STATE))
    .pipe(takeUntil(this._destroy$))

  @ContentChild(DragHandleDirective)
  handle: DragHandleDirective | null = null

  @Input() boundaryQuery = DEFAULT_DRAG_BOUNDARY_QUERY
  _boundaryRef: HTMLElement | HTMLBodyElement | null = null

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: any,
  ) {}

  ngAfterViewInit(): void {
    this._store$.subscribe()
    this._boundaryRef =
      this.document.querySelector(this.boundaryQuery) ??
      this.document.querySelector('body')

    this._dragRef = this.elementRef.nativeElement as HTMLElement
    this._dragHandleRef =
      this.handle?.elementRef?.nativeElement || this._dragRef
    this._initialize()
  }

  _computeBounds() {
    const bounds = coordsOfElement(this._boundaryRef!)
    const dragDimension = coordDimensionFromElement(this._dragRef!)
    return {
      minBound: bounds.position,
      maxBound: coordSub(bounds.dimension, dragDimension),
    }
  }

  _initialize(): void {
    if (!this._dragRef) return
    if (!this._dragHandleRef) return
    if (!this._boundaryRef) return

    this._action$.next({
      type: 'init',
      payload: this._computeBounds(),
    })

    // prettier-ignore
    const dragStart$ = fromEvent<MouseEvent>(this._dragHandleRef, 'mousedown').pipe(takeUntil(this._destroy$))
    // prettier-ignore
    const dragEnd$ = fromEvent<MouseEvent>(this.document, 'mouseup').pipe(takeUntil(this._destroy$))
    // prettier-ignore
    const drag$ = fromEvent<MouseEvent>(this.document, 'mousemove').pipe(takeUntil(this._destroy$))

    drag$.subscribe((event: MouseEvent) => {
      event.preventDefault()
      this._action$.next({
        type: 'drag',
        payload: coordFromEvent(event),
      })
    })

    dragStart$.subscribe((event: MouseEvent) => {
      event.preventDefault()
      this._action$.next({
        type: 'dragStart',
        payload: coordFromEvent(event),
      })
    })

    dragEnd$.subscribe(() => {
      this._action$.next({ type: 'dragEnd' })
    })
  }

  _translate({ x, y }: Coord): void {
    this._dragRef!.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'drag': {
        if (!state.dragging) return state

        const next = coordSub(action.payload, state.initial)
        this._translate(next)

        return {
          ...state,
          current: next,
        }
      }
      case 'dragStart': {
        if (state.dragging) return state

        this._dragRef!.classList.add('free-dragging')

        const client = action.payload

        return {
          ...state,
          dragging: true,
          initial: coordSub(client, state.current),
        }
      }
      case 'dragEnd': {
        if (!state.dragging) return state

        this._dragRef!.classList.remove('free-dragging')

        const bounds = this._computeBounds()

        const next = coordClamp(bounds.minBound, state.current, bounds.maxBound)
        this._translate(next)

        return {
          ...state,
          ...bounds,
          dragging: false,
          current: next,
          initial: next,
        }
      }
      case 'init': {
        const bounds = action.payload
        const next = coordCenter(bounds.minBound, bounds.maxBound)
        this._translate(next)

        return {
          ...state,
          ...bounds,
          current: next,
          initial: next,
        }
      }
    }
    return state
  }

  ngOnDestroy(): void {
    this._destroy$.next()
    this._destroy$.complete()
  }
}
