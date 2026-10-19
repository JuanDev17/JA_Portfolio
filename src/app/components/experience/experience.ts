import { Component } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  technologies: string[];
  current?: boolean;
  highlights?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Bank of America',
    location: 'New York, NY',
    period: 'Jul 2024 — Present',
    highlights: [
      'Develop and maintain enterprise web applications using Angular and TypeScript.',
      'Build interactive data visualizations, reusable UI components, and complex data-driven interfaces.',
      'Collaborate with cross-functional teams to deliver features, troubleshoot issues, and improve application usability.'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'SCSS',
      'Angular Material'
    ],
    current: true
  },
  {
    id: 2,
    role: 'Software Engineer Intern',
    company: 'Bank of America',
    location: 'New York, NY',
    period: 'Jan 2024 — Jul 2024',
    highlights: [
      'Contributed to the development and maintenance of enterprise applications.',
      'Gained hands-on experience with debugging, code reviews, and collaborative development workflows.',
      'Worked alongside engineers to understand application architecture and software development practices.'
    ],
    technologies: [],
    current: false
  }
];


}                                                                                                                   