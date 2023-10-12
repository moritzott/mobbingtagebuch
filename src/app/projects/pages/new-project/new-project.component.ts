import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { Language } from 'src/app/shared/interfaces/language';
import { Person } from 'src/app/shared/interfaces/person';
import { Project } from 'src/app/shared/interfaces/project';
import { Report } from 'src/app/shared/interfaces/report';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
    selector: 'app-new-project',
    templateUrl: './new-project.component.html',
    styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent {
    projectName: string = '';
    projectDescription: string = '';

    constructor(private projectService: ProjectService, private router: Router) {}

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
        this.createNewProject();
        form.reset();
        this.router.navigateByUrl('projects/overview');
    }
}
