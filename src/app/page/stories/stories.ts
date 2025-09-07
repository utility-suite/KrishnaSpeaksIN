import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { storiesData, StoryEntry } from '../../../data-entries/stories';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './stories.html',
  styleUrls: ['./stories.scss']
})
export class Stories {
  stories: StoryEntry[] = storiesData;
  filteredStories: StoryEntry[] = storiesData;
  selectedStory: StoryEntry | null = null;

  allTags: string[] = [];
  activeTag: string = 'All';

  constructor() {
    this.extractTags();
  }

  extractTags() {
    const tagSet = new Set<string>();
    this.stories.forEach(story => story.tags.forEach(tag => tagSet.add(tag)));
    this.allTags = ['All', ...Array.from(tagSet)];
  }

  filterByTag(tag: string) {
    this.activeTag = tag;
    this.filteredStories = tag === 'All'
      ? this.stories
      : this.stories.filter(story => story.tags.includes(tag));
  }

  openStory(story: StoryEntry) {
    this.selectedStory = story;
  }

  backToList() {
    this.selectedStory = null;
  }

  get storyHtml(): string {
    return this.selectedStory?.content?.join('') || '';
  }
}
