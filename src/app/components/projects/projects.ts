import { Component } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'CookFlip',
      description: 'A recipe discovery platform for finding and saving meals.',
      image: '/assets/cookflip.png',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
      githubUrl: 'https://github.com/juandev17/cookflip_services'
    },
        {
      id: 2,
      title: 'CookFlip',
      description: 'A recipe discovery platform for finding and saving meals.',
      image: '/assets/cookflip.png',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
      githubUrl: 'https://github.com/juandev17/cookflip_services'
    },
    
  ];
}