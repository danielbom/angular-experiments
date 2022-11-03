import { Component, OnInit } from '@angular/core'

type Post = {
  id: number
  image: string
  title: string
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = []

  constructor() {}

  ngOnInit(): void {
    const imagesIds = [7008010, 6489663, 4230630, 6157049]
    this.posts = imagesIds.map((id, index) => ({
      id: index,
      title: `#${index} - Sample title - Lorem Ipsum`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a justo odio. Proin id magna a nunc elementum imperdiet. Nullam vulputate ante in eros pellentesque, non sagittis magna ornare. Vestibulum dui libero, suscipit ut imperdiet a, gravida sit amet diam. Nullam sit amet diam vel erat consectetur iaculis id at lectus. Donec laoreet lobortis orci, et ornare ante fringilla sed. Vivamus condimentum eu nisi eget sagittis. Sed viverra dictum arcu, ullamcorper vestibulum justo vestibulum pretium. Suspendisse sapien ante, semper id auctor a, consequat et urna. Integer orci lectus, semper eget molestie et, consequat et diam.',
      image: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
    }))
  }
}
