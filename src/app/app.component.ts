import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { ProjectCard } from './components/project-card/project-card.component';
import { Project } from './models/project.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProjectCard], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Wodup - Gestión Deportiva',
      description: 'Plataforma Fullstack para gestión de reservas y usuarios en gimnasios. Incluye autenticación JWT y roles.',
      imageUrl: 'assets/images/prototipo_wodup.png', 
      techIcons: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      demoUrl: 'https://wodup.netlify.app',
      codeUrl: 'https://github.com/javaqber/wodup/tree/master'
    },
    {
      id: 2,
      title: 'NexusAgenda - Gestión de Eventos Personales',
      description: 'Aplicación Fullstack diseñada para ofrecer una gestión eficiente y segura de agendas personales.',
      imageUrl: 'assets/images/nexusagenda_Logo.png',
      techIcons: ['Angular', 'Spring Boot', 'MySQL'],
      demoUrl: '#',
      codeUrl: 'https://github.com/javaqber/nexusagenda'
    }
  ];
}