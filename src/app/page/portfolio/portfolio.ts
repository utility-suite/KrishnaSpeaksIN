import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projects } from '../../../data-entries/portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
projects = projects;
}
