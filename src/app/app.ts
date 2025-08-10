import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { ViewCounterService } from './services/view-counter.service';
import { filter } from 'rxjs/operators';
import { buildInfo } from '../environments/build-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('KrishnaSpeaksIN');
  isDarkMode = false;
  currentYear = new Date().getFullYear();
  buildDate = new Date(buildInfo.buildDate);

  viewCount: number | null = null; 
  pageViewCount: number | null = null; 
  currentPageId: string = '';            

  constructor(
    private router: Router,
    private viewCounter: ViewCounterService
  ) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('bg-dark', this.isDarkMode);
    document.body.classList.toggle('text-light', this.isDarkMode);
  }

  async ngOnInit() {
    if (!sessionStorage.getItem('globalViewCounted')) {
      await this.viewCounter.incrementGlobalView();
      sessionStorage.setItem('globalViewCounted', 'true');
    }
    this.viewCount = await this.viewCounter.getGlobalView();

    await this.updatePageView(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(async (event: any) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        await this.updatePageView(event.urlAfterRedirects);
      });
  }

  private async updatePageView(url: string) {
    const pageId = this.normalizePageId(url);
    this.currentPageId = pageId;

    if (pageId === 'home') {
      this.pageViewCount = null;
      return;
    }

    const sessionKey = `viewed_${pageId}`;

    if (!sessionStorage.getItem(sessionKey)) {
      await this.viewCounter.incrementPageView(pageId);
      sessionStorage.setItem(sessionKey, 'true');
    }

    this.pageViewCount = await this.viewCounter.getPageView(pageId);
  }

  private normalizePageId(url: string): string {
    let pageId = url
      .split('?')[0]         
      .replace(/^\/+/, '')  
      .replace(/\/+$/, '') 
      .toLowerCase();

    if (!pageId) pageId = 'home';
    return pageId.replace(/\//g, '_');
  }
}
