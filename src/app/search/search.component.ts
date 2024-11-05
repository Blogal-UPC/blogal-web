import {Component} from '@angular/core';

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
  tags: string[] = ['Todo', 'tag1', 'tag2', 'tag3', 'tag4'];
  selectedTag: string = 'Todo';
  recommendedPosts: Post[] = [
    {title: 'Post 1', tags: ['tag1', 'tag2']},
    {title: 'Post 2', tags: ['tag3', 'tag4']},
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

  selectTag(tag: string): void {
    this.selectedTag = tag;
    this.filterPosts(); // Actualizar la lista filtrada
  }

  filterPosts() : void {
    if (this.selectedTag === 'Todo') {
      this.filteredPosts = this.recommendedPosts;
    } else {
      this.filteredPosts = this.recommendedPosts.filter((post: Post) =>
        post.tags.includes(this.selectedTag)
      );
    }
  }
}
