import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'cCauvery',
      i18nKey: 'portfolio.cCauvery'
    },
    {
      title: 'River Health Bio Assessment System',
      i18nKey: 'portfolio.riverHealth'
    },
    {
      title: 'ICWaR – IISc',
      i18nKey: 'portfolio.icwar'
    },
    {
      title: 'ONe Group – IISc',
      i18nKey: 'portfolio.oneGroup'
    }
  ];

  projectTechMap: { [key: string]: string[] } = {
    'portfolio.cCauvery': ['Angular', 'Bootstrap 5', 'JSON', 'GitHub Pages'],
    'portfolio.riverHealth': ['Angular', 'Bootstrap 5', 'TypeScript', 'DataTables'],
    'portfolio.icwar': ['Angular', 'Bootstrap 5', 'TypeScript', 'JSON'],
    'portfolio.oneGroup': ['Angular', 'JSON', 'GitHub Pages', 'TypeScript']
  };

  projectDemoMap: { [key: string]: string } = {
    'portfolio.cCauvery': 'https://ccauvery.github.io',
    'portfolio.riverHealth': 'https://utility-suite.github.io/river-health-bio-assessment-system/',
    'portfolio.icwar': 'https://icwar.iisc.ac.in',
    'portfolio.oneGroup': 'https://krishnapandeykp.github.io/ONeGroup/'
  };

  projectGitHubMap: { [key: string]: string } = {
    'portfolio.cCauvery': 'https://github.com/cCauvery/ccauvery.github.io',
    'portfolio.riverHealth': 'https://github.com/utility-suite/river-health-bio-assessment-system',
    'portfolio.icwar': 'https://github.com/ICWaR/icwar.github.io',
    'portfolio.oneGroup': 'https://github.com/krishnapandeykp/ONeGroup'
  };
}
