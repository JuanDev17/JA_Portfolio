import { Component } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
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
      description:
        'Developing enterprise frontend applications and interactive user experiences using Angular and TypeScript.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      current: true
    },
    {
      id: 2,
      role: 'Software Engineer Intern',
      company: 'Bank of America',
      location: 'New York, NY',
      period: 'Jan 2024 — Jul 2024',
      description:
        'Contributed to software development while gaining experience with enterprise applications and team collaboration.',
      technologies: []
    }
  ];
}