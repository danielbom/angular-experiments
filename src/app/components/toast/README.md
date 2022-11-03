# Overview

This component was created based in this [tutorial](https://dev.to/fallenstedt/scan-operator-for-mini-redux-stores-41m9).
The style was based on [w3schools](https://www.w3schools.com/howto/howto_js_snackbar.asp).
The colors from [materialize css](https://materializecss.com/color.html)

# Notes

- add ToastService.\_state$:

  I must create state$ because ToastComponent was initialized before AppComponent (ToastComponent.ngOnInit() was called after AppComponent.ngOnInit()).
  I try to change the initialization of AppComponent but this generates the error [ExpressionChangedAfterItHasBeenCheckedError](https://flexiple.com/angular/expressionchangedafterithasbeencheckederror/) (I replace OnInit by AfterViewInit interface).
  I abaddon the change of initialization and I look for a solution that made the observable action$ share your last state (I try use share() and shareReplay() from rxjs before looking for BehaviorSubject).
  In the end I follow a [answer of StackOverFlow](https://stackoverflow.com/a/58199823/13215267).

