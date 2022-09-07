import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'core-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items = [
    { name: 'Dashboard', href: 'dashboard', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ];

  isDark = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.toggleClasses();
  }

  toggleTheme(): void {
    if (this.isDark) {
      localStorage.setItem('theme', 'light');
      this.isDark = false;
    } else {
      this.isDark = true;
      localStorage.setItem('theme', 'dark');
    }

    this.toggleClasses();
  }

  toggleClasses(): void {
    if (this.isDark) {
      this.renderer.addClass(document.getElementById('html'), 'dark');
    } else {
      this.renderer.removeClass(document.getElementById('html'), 'dark');
    }
  }
}
