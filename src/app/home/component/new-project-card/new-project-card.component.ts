import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/shared/services/project.service';
import { nanoid } from 'nanoid';
import { Language } from 'src/app/shared/interfaces/language';
import { Person } from 'src/app/shared/interfaces/person';
import { Project } from 'src/app/shared/interfaces/project';
import { Report } from 'src/app/shared/interfaces/report';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-project-card',
    templateUrl: './new-project-card.component.html',
    styleUrls: ['./new-project-card.component.scss'],
})
export class NewProjectCardComponent {
    projectName: string = '';
    projectDescription: string = '';

    constructor(
        private projectService: ProjectService,
        private router: Router
    ) {}

    private createNewProject(): void {
        const id: string = nanoid();
        const reports: Report[] = [];
        const language: Language = {
            code: 'de',
        };
        const persons: Person[] = [];

        const newProject: Project = {
            id: id,
            title: this.projectName,
            description: this.projectDescription,
            reports: reports,
            people: persons,
            language: language,
        };

        this.projectService.addProject(newProject);
    }

    onSubmit(form: NgForm): void {
        if (form.valid) {
            this.createNewProject();
            form.reset();
            this.router.navigateByUrl('projects/overview');
        }
    }
}
