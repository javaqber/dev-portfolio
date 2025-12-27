// src/app/models/project.interface.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;      // Ruta de la captura de pantalla
  techIcons: string[];   // Array con nombres de iconos (ej: 'angular', 'java', 'mysql')
  demoUrl: string;       // Link a Netlify
  codeUrl: string;       // Link a GitHub
}