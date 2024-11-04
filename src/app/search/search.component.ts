import { Component } from '@angular/core';

interface Post {
  title: string;
  tags: string[];
}

@Component({

  selector: 'app-search',

  templateUrl: './search.component.html',

  styleUrls: ['./search.component.css']

})

export class SearchComponent {

  searchText: string = '';
  recommendedPosts: Post[] = [
    { title: 'Post 1', tags: ['tag1', 'tag2'] },
    { title: 'Post 2', tags: ['tag3', 'tag4'] },
  ];
  filteredPosts: Post[] = [];

  onSearch(): void {
    if (this.searchText) {
      this.filteredPosts = this.recommendedPosts.filter((post: Post) =>
        post.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredPosts = this.recommendedPosts;
    }
  }
}
