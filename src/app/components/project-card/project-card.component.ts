import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  standalone: true
})
export class ProjectCard {
  @Input() project!: Project;

  getTechColor(tech: string): string {
    const colors: {[key: string]: string} = {
      'Python': '#3776AB', 'FastAPI': '#009688', 'Streamlit': '#FF4B4B',
      'Scikit-Learn': '#F7931E', 'PostgreSQL': '#336791', 'Claude AI': '#D97706',
      'Angular': '#DD0031', 'Spring Boot': '#6DB33F', 'Docker': '#2496ED',
      'MySQL': '#4479A1', 'React': '#61DAFB', 'TypeScript': '#3178C6'
    };
    return colors[tech] || '#64748B';
  }
}