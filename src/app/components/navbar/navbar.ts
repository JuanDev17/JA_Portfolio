import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
   isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.update(current => !current);

    const theme = this.isDarkMode() ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', theme);
  }

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(current => !current);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
