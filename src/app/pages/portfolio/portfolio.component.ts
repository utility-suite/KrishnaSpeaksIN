import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      title: $localize`:portfolio.title.cCauvery:cCauvery`,
      description: $localize`:portfolio.desc.cCauvery:Official web presence of the cCauvery project — Condition Assessment and Management Planning (CAMP) for the Cauvery River Basin at IISc. The platform provides access to river basin datasets, monitoring indicators, and basin-scale analytics.`,
      tech: ['Angular', 'Bootstrap 5', 'JSON', 'GitHub Pages'],
      demo: 'https://ccauvery.github.io',
      github: 'https://github.com/cCauvery/ccauvery.github.io'
    },
    {
      title: $localize`:portfolio.title.riverHealth:River Health Bio Assessment System`,
      description: $localize`:portfolio.desc.riverHealth:An interactive decision-support system for assessing river health using macroinvertebrate-based indices such as GRSbios, HKHbios, BMWP, and regional variants. Designed to assist researchers, students, and stakeholders in ecological monitoring.`,
      tech: ['Angular', 'Bootstrap 5', 'TypeScript', 'DataTables'],
      demo: 'https://utility-suite.github.io/river-health-bio-assessment-system/',
      github: 'https://github.com/utility-suite/river-health-bio-assessment-system'
    },
    {
      title: $localize`:portfolio.title.icwar:ICWaR – IISc`,
      description: $localize`:portfolio.desc.icwar:Official website of the Interdisciplinary Centre for Water Research (ICWaR), IISc. Includes academic programs, research projects, faculty profiles, collaborations, and dissemination of center-led initiatives.`,
      tech: ['Angular', 'Bootstrap 5', 'TypeScript', 'JSON'],
      demo: 'https://icwar.iisc.ac.in',
      github: 'https://github.com/ICWaR/icwar.github.io'
    },
    {
      title: $localize`:portfolio.title.oneGroup:ONe Group – IISc`,
      description: $localize`:portfolio.desc.oneGroup:Website of the ONe Research Group led by Prof. Praveen C. Ramamurthy at the Department of Materials Engineering, IISc. Designed to showcase ongoing research, publications, and collaborative projects in sustainability and energy.`,
      tech: ['Angular', 'JSON', 'GitHub Pages', 'TypeScript'],
      demo: 'https://krishnapandeykp.github.io/ONeGroup/',
      github: 'https://github.com/krishnapandeykp/ONeGroup'
    }
  ];
}
