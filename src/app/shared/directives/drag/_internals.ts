import { State, Coord } from './types'

export const INITIAL_STATE: State = {
  initial: { x: 0, y: 0 },
  current: { x: 0, y: 0 },
  minBound: { x: 0, y: 0 },
  maxBound: { x: Infinity, y: Infinity },
  dragging: false,
}
export const DEFAULT_DRAG_BOUNDARY_QUERY = 'body'

export function clamp(min: number, value: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function coordClamp(min: Coord, value: Coord, max: Coord): Coord {
  return { x: clamp(min.x, value.x, max.x), y: clamp(min.y, value.y, max.y) }
}

export function coordAdd(lhs: Coord, rhs: Coord): Coord {
  return { x: lhs.x + rhs.x, y: lhs.y + rhs.y }
}

export function coordSub(lhs: Coord, rhs: Coord): Coord {
  return { x: lhs.x - rhs.x, y: lhs.y - rhs.y }
}

export function coordFromEvent(event: MouseEvent) {
  return { x: event.clientX, y: event.clientY }
}

export function coordDimensionFromElement(element: HTMLElement) {
  return { x: element.offsetWidth, y: element.offsetHeight }
}

export function coordPositionFromElement(element: HTMLElement) {
  return { x: element.offsetLeft, y: element.offsetTop }
}

export function coordsOfElement(element: HTMLElement) {
  return {
    position: coordPositionFromElement(element),
    dimension: coordDimensionFromElement(element),
  }
}

export function coordCenter(position: Coord, dimension: Coord): Coord {
  return {
    x: (position.x + dimension.x) / 2,
    y: (position.y + dimension.y) / 2,
  }
}

