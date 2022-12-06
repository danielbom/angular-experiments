import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup

  constructor() {
    this.formGroup = this.createForm()
  }

  ngOnInit(): void {}

  private createForm() {
    return new FormGroup({
      username: new FormControl(null, { nonNullable: true }),
      password: new FormControl(null, { nonNullable: true }),
    })
  }
}
