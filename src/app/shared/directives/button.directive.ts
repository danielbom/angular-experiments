import { Directive, Input, ElementRef, OnInit } from '@angular/core'

type Variants = 'outlined' | 'filled'

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective implements OnInit {
  @Input() variant: Variants = 'outlined'

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const variants = {
      outlined: [
        'text-teal-600',
        'border-teal-600',
        'hover:border-transparent',
        'hover:text-white',
        'hover:bg-teal-600',
      ],
      filled: [
        'border-transparent',
        'bg-teal-600',
        'text-white',
        'hover:border-teal-600',
        'hover:text-teal-600',
        'hover:bg-white',
      ],
    }
    const classes = [
      'w-max',
      'py-2',
      'px-5',
      'pointer',
      'rounded',
      'border-2',
      'font-semibold',
      'duration-150',
    ]

    this.addClasses(classes)
    this.addClasses(variants[this.variant])
  }

  private addClasses(classes: string[]) {
    for (const it of classes) {
      this.el.nativeElement.classList.add(it)
    }
  }
}
