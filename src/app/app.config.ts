import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      { path: '', loadComponent: () => import('./page/home/home').then(m => m.Home) },
      { path: 'about', loadComponent: () => import('./page/about/about').then(m => m.About) },
      { path: 'portfolio', loadComponent: () => import('./page/portfolio/portfolio').then(m => m.Portfolio) },
      { path: 'blog', loadComponent: () => import('./page/blog/blog').then(m => m.Blog) },
      { path: 'blog/:slug', loadComponent: () => import('./page/blog/blog').then(m => m.Blog) },
      { path: 'contact', loadComponent: () => import('./page/contact/contact').then(m => m.Contact) },
      { path: 'gallery', loadComponent: () => import('./page/gallery/gallery').then(m => m.Gallery) },
      { path: 'hi', loadComponent: () => import('./page/hi/hi').then(m => m.Hi) },
      { path: '**', redirectTo: '' }
    ])
  ]
};
