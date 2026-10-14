import { Component } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  imports: [ScrollReveal],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
