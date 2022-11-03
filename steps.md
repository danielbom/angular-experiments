# References

* [Dev.to - Scan Operator For Mini Redux Stores'](https://dev.to/fallenstedt/scan-operator-for-mini-redux-stores-41m9)
* [Youtube - React Node.js MySQL Full Stack BLog App Tutorial](https://www.youtube.com/watch?v=0aPLk2e2Z3g&ab_channel=LamaDev)
* [Angular.io - NgSwitch](https://angular.io/api/common/NgSwitch)
* [StackOverFlow - Difference of parentheses, brackets and asterisks in Angular](https://stackoverflow.com/questions/35944749/what-is-the-difference-between-parentheses-brackets-and-asterisks-in-angular2)
* [StackOverFlow - Run a function when page refreshes](https://stackoverflow.com/questions/63344293/how-to-run-a-function-when-a-page-refreshes-in-angular10-typescript)
* [StackOverFlow - How to pass query parameters with a routerlink](https://stackoverflow.com/questions/37880876/how-to-pass-query-parameters-with-a-routerlink)
* [StackOverFlow - What is let in angular 2 templates](https://stackoverflow.com/questions/42978082/what-is-let-in-angular-2-templates)
* [StackOverFlow - Using ng-content in ng-template](https://stackoverflow.com/questions/51948301/using-ng-content-in-ng-template)

## Tools

* [Remove White Background](https://remove-white-background.imageonline.co/)
* [Create your logo](https://app.logo.com/dashboards://app.logo.com/dashboard)

# Self documented usefull learning

## Router Link

```html
<a [routerLink]="['../']" [queryParams]="{name: 'ferret'}" [fragment]="nose">
  Ferret Nose
</a>
```

```
foo://example.com:8042/over/there?name=ferret#nose
\_/   \______________/\_________/ \_________/ \__/
 |           |            |            |        |
 scheme    authority      path        query   fragment
```

For more info - https://angular.io/guide/router#query-parameters-and-fragments

## Template Outlet

```html
<ng-template #myTemplate let-col let-foo="bar">
	<div>{{col}}</div>
	<div>{{foo}}</div>
</ng-template>

<!-- render above template with a custom context -->
<ng-template
	[ngTemplateOutlet]="myTemplate"
	[ngTemplateOutletContext]="{ $implicit: 'some col value', bar: 'some bar value' }"
></ng-template>

<ng-template
  [ngTemplateOutlet]="myTemplate; context: { $implicit: 'some col value', bar: 'some bar value' }"
></ng-template>
```

## Parentheses, brackets and asterisks in Angular template

All details can be found here: https://angular.io/docs/ts/latest/guide/template-syntax.html

* `directiveName` - is the short hand form for structural directives where the long form can only be applied to <template> tags. The short form implicitely wraps the element where it's applied in a <template>.
* `[prop]="value"` is for object binding to properties (@Input() of an Angular component or directive or a property of a DOM element).
There are special forms:
  * `[class.className]` binds to a css class to enable/disable it
  * `[style.styleName]` binds to a style property
  * `[style.styleName.px]` binds to a style property with a preset unit
  * `[attr.attrName]` binds a value to an attribute (visible in the DOM, while properties are not visible)
  * `[role.roleName]` binds to the ARIA role attribute (not yet available)
* `prop="{{value}}"` binds a value to a property. The value is stringified (aka interpolation)
* `(event)="expr"` binds an event handler to an @Output() or DOM event
* `#var` or `#var` has different functions depending on the context
  * --In an `\*ngFor="#x in y;#i=index"` scope variables for the iteration are created--
		(In beta.17 this is changed to `\*ngFor="let x in y; let i=index"`)
  * On a DOM element `\<div #mydiv\>` a reference to the element
  * On an Angular component a reference to the component

 * On an element that is an Angular component or has an Angular directive where `exportAs:"ngForm"` is defined, `#myVar="ngForm"` creates a reference to this component or directive.

## Angular OnPush Change Detection and Component Design - Avoid Common Pitfalls

- Default Change Detection and Object Mutability: check for each event if are changes in template expressions 
- OnPush Change Detection and Direct Object Mutability: change are made when properties values are changed (immutable value and references) or events are called
- 
- 


