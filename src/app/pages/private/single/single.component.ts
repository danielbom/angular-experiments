import { Component, OnInit } from '@angular/core'

import { generateId } from 'src/app/functions/generateId'

type Post = {
  id: string
  title: string
  image: string
}

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  posts: Post[] = []

  constructor() {}

  ngOnInit(): void {
    const imagesIds = [7008010, 6489663, 4230630, 6157049]
    this.posts = imagesIds.map((id) => ({
      id: generateId(),
      title: 'Lorem ipsum master blaster',
      image: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    }))
  }
}
