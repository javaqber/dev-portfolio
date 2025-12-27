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
 // @Input permite que el padre le pase el proyecto a esta tarjeta
 @Input() project!: Project;
}
