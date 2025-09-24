import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  skills: Skill[] = [
    { id: 1, name: 'JavaScript', icon: 'javascript' },
    { id: 2, name: 'TypeScript', icon: 'typescript' },
    { id: 3, name: 'Node.js', icon: 'nodejs' },
    { id: 4, name: 'React.js', icon: 'react' },
    { id: 5, name: 'Next.js', icon: 'nextjs' },
    { id: 6, name: 'Express', icon: 'express' },
    { id: 7, name: 'Flutter', icon: 'flutter' },
    { id: 8, name: 'MongoDB', icon: 'mongodb' },
    { id: 9, name: 'PostgreSQL', icon: 'postgresql' },
    { id: 10, name: 'Prisma', icon: 'prisma' },
    { id: 11, name: 'Angular', icon: 'angular' },
  ];
}
