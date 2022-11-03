import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
})
export class WriteComponent implements OnInit {
  categories: Category[] = [
    { value: 'art', label: 'Art' },
    { value: 'science', label: 'Science' },
    { value: 'technology', label: 'Technology' },
    { value: 'cinema', label: 'Cinema' },
    { value: 'design', label: 'Design' },
    { value: 'food', label: 'Food' },
  ]

  post: PostAdd = {
    title: '',
    content: '',
  }

  constructor() {}

  ngOnInit(): void {}

  savePost(): void {
    console.log(this.post)
  }
}

type Category = {
  value: string
  label: string
}

type PostAdd = {
  title: string
  content: string
}
