import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
