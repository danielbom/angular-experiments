export type Coord = {
  x: number
  y: number
}

export type State = {
  initial: Coord
  current: Coord
  minBound: Coord
  maxBound: Coord
  dragging: boolean
}

export type Init = Pick<State, 'minBound' | 'maxBound'>

export type Action =
  | { type: 'drag'; payload: Coord }
  | { type: 'dragStart'; payload: Coord }
  | { type: 'dragEnd' }
  | { type: 'init'; payload: Init }
