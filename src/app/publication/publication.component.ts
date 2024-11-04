import { Component } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
  content: string = '';
  coauthors: string[] = [];
  previewContent: string = '';

  addCoauthor(coauthor: string) {
    if (coauthor) {
      this.coauthors.push(coauthor);
    }
  }

  updatePreview(content: string) {
    this.previewContent = content;
  }

  publish() {
    // Lógica para publicar la publicación
    console.log('Publicación publicada con coautores:', this.coauthors);
    console.log('Contenido del artículo:', this.content);
  }

  importTemplate(template: string) {
    // Lógica para importar la plantilla seleccionada
    if (template === 'academic') {
      this.content = 'Plantilla de Texto Académico\n\n[Escribe tu contenido académico aquí...]';
    } else if (template === 'blog') {
      this.content = 'Plantilla de Blog\n\n[Escribe tu contenido de blog aquí...]';
    }
  }
}