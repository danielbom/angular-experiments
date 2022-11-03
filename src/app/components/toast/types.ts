export type ToastId = string

export type Toast = {
  id: ToastId
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
}

export type ToastAdd = Omit<Toast, 'id'>

export type ToastAction =
  | { type: 'remove'; payload: ToastId }
  | { type: 'add'; payload: Toast }

export type ToastState = Toast[]
