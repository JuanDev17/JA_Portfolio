
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  signal
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Hero implements OnInit, OnDestroy {

  words = ['build', 'create', 'design', 'develop'];

  displayedWord = signal('');

  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;

  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit() {
    this.typeWord();
  }

  typeWord() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.displayedWord.set(
      currentWord.substring(0, this.charIndex)
    );

    let speed = this.isDeleting ? 70 : 120;

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      speed = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      speed = 400;
    }

    this.timeoutId = setTimeout(() => this.typeWord(), speed);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }
}
