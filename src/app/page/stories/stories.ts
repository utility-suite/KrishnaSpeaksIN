import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { storiesData, StoryEntry } from '../../../data-entries/stories';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './stories.html',
  styleUrl: './stories.scss'
})
export class Stories implements OnInit {
  stories: StoryEntry[] = storiesData;
  selectedStory: StoryEntry | null = null;

  activeTag: string = 'All';
  allTags: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.allTags = ['All', ...this.getUniqueTags()];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.selectedStory = slug
        ? this.stories.find(story => story.slug === slug) || null
        : null;
    });
  }

  getUniqueTags(): string[] {
    const tagSet = new Set<string>();
    this.stories.forEach(story => story.tags.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet);
  }

  filterByTag(tag: string): void {
    this.activeTag = tag;
  }

  get filteredStories(): StoryEntry[] {
    return this.activeTag === 'All'
      ? this.stories
      : this.stories.filter(story => story.tags.includes(this.activeTag));
  }

  get storyHtml(): string {
    return this.selectedStory?.content?.join('') || '';
  }
}
