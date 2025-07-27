import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GALLERY, GalleryItem } from '../../../data-entries/gallery';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
 allItems: GalleryItem[] = GALLERY;
  activeTag: string = 'all';
  selectedImage: string | null = null;

  get allTags(): string[] {
    const tags = new Set<string>();
    this.allItems.forEach(item => item.tags.forEach(tag => tags.add(tag)));
    return ['all', ...tags];
  }

  get filteredItems(): GalleryItem[] {
    if (this.activeTag === 'all') return this.allItems;
    return this.allItems.filter(item => item.tags.includes(this.activeTag));
  }

  selectTag(tag: string): void {
    this.activeTag = tag;
  }

  openModal(image: string): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}