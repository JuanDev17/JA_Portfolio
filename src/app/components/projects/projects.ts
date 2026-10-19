import { Component } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  frontendUrl?: string;
  backendUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  status?: 'In Development' | 'Completed';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: IProject[] = [
{
  id: 1,
  title: 'CookFlip',
  description: 'A food discovery and recipe management application where users can explore, create, and organize recipes. Currently developing the Angular frontend and Spring Boot REST API with PostgreSQL persistence.',
  image: 'assets/cookflip.png',
  technologies: [
    'Angular',
    'TypeScript',
    'Java',
    'Spring Boot',
    'PostgreSQL'
  ],
  frontendUrl: 'https://github.com/YOUR_USERNAME/YOUR_FRONTEND_REPO',
  backendUrl: 'https://github.com/juandev17/cookflip_services',
  status: 'In Development'
},
{
  id: 2,
  title: 'Contact Management API',
  description:
    'A RESTful contact management application built with Spring Boot and PostgreSQL. Supports CRUD operations, input validation, and persistent database storage.',
  image: 'assets/contactmanagement.png',
  technologies: [
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Spring Data JPA',
    'REST API'
  ],
  githubUrl: 'https://github.com/JuanDev17/cs-320',
  status: 'Completed'
}

    
  ];
}