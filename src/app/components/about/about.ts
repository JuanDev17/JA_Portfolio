import { Component } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'React',
    'HTML',
    'SCSS',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Git'
  ];
}