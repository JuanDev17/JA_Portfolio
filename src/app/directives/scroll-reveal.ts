import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject,
  input
} from '@angular/core';

import { animate, inView } from 'motion';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollReveal implements AfterViewInit, OnDestroy {

  private element = inject(ElementRef<HTMLElement>);

  // Custom delay for each element
  delay = input(0);

  private stopObserving?: () => void;

  ngAfterViewInit(): void {
    const el = this.element.nativeElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    el.style.opacity = '0';
    el.style.translate = '0 50px';

    let hasAnimated = false;

    this.stopObserving = inView(
      el,
      () => {
        if (hasAnimated) return;

        hasAnimated = true;

        animate(
          el,
          {
            opacity: 1,
            translate: '0 0px'
          },
          {
            duration: 0.8,
            delay: this.delay(),
            ease: 'easeOut'
          }
        );
      },
      {
        amount: 0.2,
        margin: '0px 0px -60px 0px'
      }
    );
  }

  ngOnDestroy(): void {
    this.stopObserving?.();
  }
}