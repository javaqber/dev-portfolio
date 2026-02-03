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
      title: 'IQI - Industrial Quality Inspector',
      description: 'API utiliza un modelo YOLOv8 entrenado para detectar defectos en la extrusión de aluminio.',
      imageUrl: 'assets/images/logo_IQI.png', 
      techIcons: ['Python', 'Docker', 'FastAPI'],
      demoUrl: 'https://industrial-quality-inspector.onrender.com/docs',
      codeUrl: 'https://github.com/javaqber/industrial-quality-inspector.git'
    },
    {
      id: 2,
      title: 'BitSense Monitor - Monitor de Sentimiento y Precio de Bitcoin',
      description: 'Ingeniería de Datos end-to-end que monitoriza el precio del Bitcoin en tiempo real.',
      imageUrl: 'assets/images/bitsense_monitor.png',
      techIcons: ['Python', 'Docker', 'PostgreSQL'],
      demoUrl: '#',
      codeUrl: 'https://github.com/javaqber/bitcoin-sentiment-etl-docker.git'
    },
    {
      id: 3,
      title: 'EcoRadar - Localizador de Puntos Ecológicos',
      description: 'Desarrollo Full Stack y Sistemas de Información Geográfica (GIS).',
      imageUrl: 'assets/images/ecoradar_logo.png',
      techIcons: ['Angular', 'Spring Boot', 'Docker', 'PostgreSQL'],
      demoUrl: '#',
      codeUrl: 'https://github.com/javaqber/ecoradar.git'
    },
    {
      id: 4,
      title: 'NexusAgenda - Gestión de Eventos Personales',
      description: 'Aplicación Fullstack diseñada para ofrecer una gestión eficiente y segura de agendas personales.',
      imageUrl: 'assets/images/nexusagenda_Logo.png',
      techIcons: ['Angular', 'Spring Boot', 'MySQL'],
      demoUrl: 'https://nexusagenda.netlify.app/',
      codeUrl: 'https://github.com/javaqber/nexusagenda'
    },
    {
      id: 5,
      title: 'Wodup - Gestión Deportiva',
      description: 'Plataforma Fullstack para gestión de reservas y usuarios en gimnasios. Incluye autenticación JWT y roles.',
      imageUrl: 'assets/images/prototipo_wodup.png', 
      techIcons: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      demoUrl: 'https://wodup.netlify.app',
      codeUrl: 'https://github.com/javaqber/wodup/tree/master'
    }
  ];
}