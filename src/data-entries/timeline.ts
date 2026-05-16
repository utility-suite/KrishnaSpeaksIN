export interface TimelineEntry {
  category: 'Education' | 'Experience';
  event: string;
  year: number;
  title: string;
  institution: string;
  board: string;
  score: string;
  period: string;
  location: string;
  link: string;
}

export const timelineData: TimelineEntry[] = [
  { 
    category: 'Education',
    event: '10th', 
    year: 2014, 
    title: 'Secondary', 
    institution: 'Central Academy School Taramandal Road', 
    board: 'CBSE Board', 
    score: '9.2 CGPA', 
    period: '2014',
    location: 'Gorakhpur, Uttar Pradesh',
    link: 'https://www.centralacademygkp.org/campuslandingpage/taramandal'
  },
  { 
    category: 'Education',
    event: '12th', 
    year: 2016, 
    title: 'Senior Secondary', 
    institution: 'Central Hindu School Divya Nagar', 
    board: 'CBSE Board', 
    score: '78.6%', 
    period: '2016',
    location: 'Gorakhpur, Uttar Pradesh',
    link: 'https://chsgkp.in/'
  },
  { 
    category: 'Education',
    event: 'BSc (Dropped)', 
    year: 2018, 
    title: 'BSc. Mathematics (Dropped)', 
    institution: 'University of Allahabad', 
    board: 'University of Allahabad', 
    score: 'N/A', 
    period: '2018',
    location: 'Prayagraj, Uttar Pradesh',
    link: 'https://www.allduniv.ac.in/'
  },
  { 
    category: 'Education',
    event: 'Graduation', 
    year: 2021, 
    title: 'Bachelor of Computer Applications (BCA)', 
    institution: 'Acharya Institute of Graduate Studies', 
    board: 'Bengaluru City University', 
    score: '9.33 CGPA', 
    period: '2018-2021',
    location: 'Bengaluru, Karnataka',
    link: 'https://www.aigs.ac.in/'
  },
  { 
    category: 'Education',
    event: 'Post Graduation', 
    year: 2023, 
    title: 'Master of Computer Applications (MCA)', 
    institution: 'JAIN (Deemed-to-be University)', 
    board: 'JAIN (Deemed-to-be University)', 
    score: '9.35 CGPA', 
    period: '2021-2023',
    location: 'Bengaluru, Karnataka',
    link: 'https://www.jainuniversity.ac.in/'
  },
  { 
    category: 'Experience',
    event: 'Work Experience', 
    year: 2026, 
    title: 'Technical Assistant', 
    institution: 'Indian Institute of Science (IISc)', 
    board: 'Interdisciplinary Centre for Water Research (ICWaR)', 
    score: 'N/A', 
    period: '2023 - Present',
    location: 'Bengaluru, Karnataka',
    link: 'https://iisc.ac.in/'
  }
];