import { Component, OnInit } from '@angular/core';

const mockArticles: Article[] = [
  {
    avatar: 'http://i.imgur.com/Qr71crq.jpg',
    author: 'Eric Simons',
    publishDate: new Date('2020-01-20'),
    title: 'How to build webapps that scale',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum \
        quis tristique sapien, ut convallis ligula. Nunc libero quam, pretium eget mi et, \
        eleifend scelerisque est. Duis imperdiet finibus ultrices. Mauris sagittis convallis \
        orci, id luctus tortor efficitur id. Sed arcu nulla, volutpat id lectus at, cursus \
        viverra ante. Sed sit amet enim eros. Aenean sit amet convallis mi. Morbi vulputate \
        venenatis diam sed accumsan. Ut euismod aliquam risus eu molestie. Aenean viverra \
        mattis iaculis. Duis dapibus justo quis erat iaculis pellentesque. Sed in pretium \
        purus, eu feugiat ante. Sed ut libero id lacus sollicitudin iaculis. Aenean et mollis \
        enim, eu rhoncus quam.',
    likes: 29
  },
  {
    avatar: 'http://i.imgur.com/N4VcUeJ.jpg',
    author: 'Albert Pai',
    publishDate: new Date('2020-01-21'),
    title: "The song you won't ever stop singing. No matter how hard you try.",
    content: 'Praesent ac tempor dolor. Vivamus eu sollicitudin lacus. Nam aliquet odio \
        sit amet ipsum sodales, quis porta tortor ultricies. Maecenas laoreet mollis bibendum. \
        Nulla malesuada euismod mauris nec interdum. Donec volutpat, dui ut efficitur efficitur, \
        nisl leo facilisis nibh, ac commodo diam nulla a libero. Donec iaculis elit in lectus \
        semper pulvinar. Suspendisse et ullamcorper nisl. Nunc erat dui, tempor quis erat ac, \
        facilisis commodo felis. Morbi condimentum libero sit amet suscipit condimentum. Cras \
        ullamcorper libero id luctus maximus. Suspendisse sit amet vestibulum orci.',
    likes: 32
  }
];

const mockTags: Tag[] = [
  {
    name: 'programming',
    url: ''
  },
  {
    name: 'javascript',
    url: ''
  },
  {
    name: 'emberjs',
    url: ''
  },
  {
    name: 'angularjs',
    url: ''
  },
  {
    name: 'react',
    url: ''
  },
  {
    name: 'mean',
    url: ''
  },
  {
    name: 'node',
    url: ''
  },
  {
    name: 'rails',
    url: ''
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public articles = mockArticles;
  public tags = mockTags;

  constructor() { }

  ngOnInit(): void {
  }

  like(_article: Article) {
    _article.likes += 1;
  }

}



export interface Article {
  avatar: string;
  author: string;
  publishDate: Date;
  likes: number;
  title: string;
  content: string;
}

export interface Tag {
  name: string,
  url: string
}