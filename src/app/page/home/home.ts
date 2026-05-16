import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Import your strongly typed data
import { timelineData, TimelineEntry } from '../../../data-entries/timeline'; 

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  @ViewChild('careerChart') careerChart!: ElementRef;
  chart: any;
  myTimeline: TimelineEntry[] = timelineData;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }

  createChart() {
    if (!this.careerChart || !this.careerChart.nativeElement) {
      console.warn('Canvas element not found yet.');
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.careerChart.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.myTimeline.map(d => d.event),
        datasets: [{
          label: 'Timeline',
          data: this.myTimeline.map(d => d.year),
          borderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 9,
          fill: false,
          tension: 0.1,
          
          backgroundColor: (context) => {
            const index = context.dataIndex;
            return this.myTimeline[index]?.category === 'Experience' ? '#198754' : '#0d6efd';
          },
          borderColor: (context) => {
            const index = context.dataIndex;
            return this.myTimeline[index]?.category === 'Experience' ? '#198754' : '#0d6efd';
          },
          
          segment: {
            borderColor: (context) => {
              return this.myTimeline[context.p1DataIndex]?.category === 'Experience' ? '#198754' : '#0d6efd';
            }
          }
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
        onHover: (event: any, chartElement) => {
          event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        },
        
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const dataIndex = elements[0].index;
            const link = this.myTimeline[dataIndex].link;
            if (link) {
              window.open(link, '_blank');
            }
          }
        },

        scales: {
          x: {
            grid: { display: false }
          },
          y: {
            position: 'right',
            min: 2012, 
            max: 2028,
            ticks: {
              stepSize: 2,
              callback: function(value) {
                return value.toString(); 
              }
            },
            grid: {
              color: '#e9ecef'
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#000',
            bodyColor: '#333',
            borderColor: '#dee2e6',
            borderWidth: 1,
            padding: 12,
            boxPadding: 6,
            usePointStyle: true,
            callbacks: {
              title: (context) => {
                const index = context[0].dataIndex;
                return this.myTimeline[index].title; 
              },
              label: (context) => {
                const index = context.dataIndex;
                const data = this.myTimeline[index];
                
                let tooltipLines = [];
                
                if (data.category === 'Experience') {
                  tooltipLines = [
                    `🏢 ${data.institution}`,
                    `📍 ${data.location}`,
                    `Dept: ${data.board}`,
                    `Duration: ${data.period}`
                  ];
                } else {
                  tooltipLines = [
                    `🏫 ${data.institution}`,
                    `📍 ${data.location}`,
                    `Board/Uni: ${data.board}`,
                    `Duration: ${data.period}`
                  ];
                  if (data.score !== 'N/A') {
                    tooltipLines.push(`Score: ${data.score}`);
                  }
                }

                tooltipLines.push(''); 
                tooltipLines.push('👉 Click to visit website');
                
                return tooltipLines;
              }
            }
          }
        }
      }
    });
  }
}