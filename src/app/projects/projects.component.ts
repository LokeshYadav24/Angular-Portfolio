import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  projectUrl: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [ProjectCardComponent, CommonModule],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'NextJs Ticketing App',
      description:
        'Ticketing app for managing, and tracking emplooyee issues. Using NextJs and MongoDB',
      tech: ['nextjs', 'mongodb', 'javascript', 'tailwindcss'],
      githubLink: 'https://github.com/FumiMelvinDev/ticketing-app',
      images: ['1.png', 'ticket1.png', 'ticket2.png', 'ticket3.png'],
      projectUrl: 'https://ticketing-app-rose.vercel.app/',
    },
    {
      id: 2,
      title: 'NextJs Ecommerce App',
      description:
        'Ecommerce app.This app was created using NextJS, Swell and Clerk for the authentication.',
      tech: ['nextjs', 'javascript', 'tailwindcss'],
      githubLink: 'https://github.com/FumiMelvinDev/next-ecommerce-swell',
      images: ['2.png', 'store1.png', 'store2.png', 'store3.png'],
      projectUrl: 'https://next-ecommerce-swell.vercel.app/',
    },
    {
      id: 3,
      title: 'Flutter Notes App',
      description: '',
      tech: ['flutter'],
      githubLink: 'https://github.com/FumiMelvinDev/notes_app',
      images: ['3.png', 'notes1.png', 'notes2.png'],
      projectUrl: '',
    },
    {
      id: 4,
      title: 'Flutter Currency Converter',
      description: 'flutter',
      tech: ['flutter'],
      githubLink: 'https://github.com/FumiMelvinDev/flutter_currency_converter',
      images: ['4.png', 'currency1.png', 'currency2.png'],
      projectUrl: '',
    },
    {
      id: 5,
      title: 'Flutter Finance Tracker',
      description:
        'Flutter Finance Tracking app, used to track day by finances.',
      tech: ['flutter'],
      githubLink:
        'https://github.com/FumiMelvinDev/Flutter-expense-tracker-app',
      images: ['5.png', 'finance1.png', 'finance2.png'],
      projectUrl: '',
    },
  ];
}
