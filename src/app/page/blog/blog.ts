import { Component, OnInit } from '@angular/core';
import { BlogEntry, blogData } from '../../../data-entries/blogs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [RouterModule, CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  blogList = blogData;
  selectedBlog: BlogEntry | null = null;

  activeTag: string = 'All';
  allTags: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.allTags = ['All', ...this.getUniqueTags()];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.selectedBlog = slug ? this.blogList.find(b => b.slug === slug) || null : null;
    });
  }

  getUniqueTags(): string[] {
    const tagSet = new Set<string>();
    this.blogList.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet);
  }

  filterByTag(tag: string): void {
    this.activeTag = tag;
  }

  get filteredBlogList(): BlogEntry[] {
    return this.activeTag === 'All'
      ? this.blogList
      : this.blogList.filter(post => post.tags.includes(this.activeTag));
  }
}
