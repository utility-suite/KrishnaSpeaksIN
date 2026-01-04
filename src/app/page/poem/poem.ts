import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PoemEntry, poemData } from '../../../data-entries/poems';

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './poem.html',
  styleUrl: './poem.scss'
})
export class Poem implements OnInit {

  poemList: PoemEntry[] = poemData;
  selectedPoem: PoemEntry | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      this.selectedPoem = slug
        ? this.poemList.find(poem => poem.slug === slug) || null
        : null;
    });
  }

  get filteredPoemList(): PoemEntry[] {
    return this.poemList;
  }
}
