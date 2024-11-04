// publication.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
  content: string = '';
  coauthors: string[] = [];

  addCoauthor(coauthorName: string) {
    if (coauthorName && !this.coauthors.includes(coauthorName)) {
      this.coauthors.push(coauthorName);
    }
  }

  previewContent() {
    // Implement preview logic here
  }

  publishContent() {
    // Implement publish logic here
  }
}
