import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links = [
    { label: 'ART', value: 'art' },
    { label: 'SCIENCE', value: 'science' },
    { label: 'TECHNOLOGY', value: 'technology' },
    { label: 'CINEMA', value: 'cinema' },
    { label: 'DESIGN', value: 'design' },
    { label: 'FOOD', value: 'food' },
  ]
}
