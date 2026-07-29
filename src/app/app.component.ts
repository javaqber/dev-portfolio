import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      title: 'AuraPredict - Mantenimiento Predictivo',
      description: 'Plataforma SaaS de mantenimiento predictivo industrial con sensores IoT e IA. Detecta fallos en maquinaria semanas antes de que ocurran mediante análisis de vibración en tiempo real.',
      imageUrl: 'assets/images/aura_predict_logo.png',
      techIcons: ['Python', 'FastAPI', 'Streamlit', 'Scikit-Learn', 'PostgreSQL'],
      demoUrl: 'https://aurapredict-dashboard.onrender.com/',
      codeUrl: 'https://github.com/javaqber/aura-predict.git',
      brandText1: 'Aura', brandText2: 'Predict',
      brandColor: '#4A90D9', brandBg: '#0A192F'
    },
    {
      id: 2,
      title: 'IQI - Industrial Quality Inspector',
      description: 'PWA móvil de inspección visual de calidad industrial con IA. Fotografía una pieza y recibe en segundos diagnóstico en tres niveles: APROBADO, REVISAR o RECHAZADO con el defecto detectado.',
      imageUrl: 'assets/images/logo_IQI.png',
      techIcons: ['Python', 'FastAPI', 'Claude AI', 'PostgreSQL'],
      demoUrl: 'https://industrial-quality-inspector.onrender.com/app',
      codeUrl: 'https://github.com/javaqber/industrial-quality-inspector.git',
      brandText1: 'IQ', brandText2: 'Inspector',
      brandColor: '#A78BFA', brandBg: '#0F0A1E'
    },
    {
      id: 3,
      title: 'BitSense Monitor - Sentimiento y Precio Bitcoin',
      description: 'Ingeniería de Datos end-to-end que monitoriza el precio del Bitcoin en tiempo real.',
      imageUrl: 'assets/images/bitsense_monitor.png',
      techIcons: ['Python', 'Docker', 'PostgreSQL'],
      demoUrl: 'https://github.com/javaqber/bitcoin-sentiment-etl-docker.git',
      codeUrl: 'https://github.com/javaqber/bitcoin-sentiment-etl-docker.git',
      brandText1: 'Bit', brandText2: 'Sense',
      brandColor: '#10B981', brandBg: '#061A14'
    },
    {
      id: 4,
      title: 'EcoRadar - Localizador de Puntos Ecológicos',
      description: 'Desarrollo Full Stack y Sistemas de Información Geográfica (GIS).',
      imageUrl: 'assets/images/ecoradar_logo.png',
      techIcons: ['Angular', 'Spring Boot', 'Docker', 'PostgreSQL'],
      demoUrl: 'https://github.com/javaqber/ecoradar.git',
      codeUrl: 'https://github.com/javaqber/ecoradar.git',
      brandText1: 'Eco', brandText2: 'Radar',
      brandColor: '#4ADE80', brandBg: '#061A0E'
    },
    {
      id: 5,
      title: 'NexusAgenda - Gestión de Eventos Personales',
      description: 'Aplicación Fullstack diseñada para ofrecer una gestión eficiente y segura de agendas personales.',
      imageUrl: 'assets/images/nexusagenda_Logo.png',
      techIcons: ['Angular', 'Spring Boot', 'MySQL'],
      demoUrl: 'https://nexusagenda.netlify.app/',
      codeUrl: 'https://github.com/javaqber/nexusagenda',
      brandText1: 'Nexus', brandText2: 'Agenda',
      brandColor: '#FB923C', brandBg: '#1C0E05'
    },
    {
      id: 6,
      title: 'Wodup - Gestión Deportiva',
      description: 'Plataforma Fullstack para gestión de reservas y usuarios en gimnasios. Incluye autenticación JWT y roles.',
      imageUrl: 'assets/images/prototipo_wodup.png',
      techIcons: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      demoUrl: 'https://wodup.netlify.app',
      codeUrl: 'https://github.com/javaqber/wodup/tree/master',
      brandText1: 'Wod', brandText2: 'up',
      brandColor: '#F87171', brandBg: '#1A0505'
    }
  ];
}