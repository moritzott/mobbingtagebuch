import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonService } from './person.service';
import { ReportService } from './report.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[] = [];
    private projectsSubject$ = new BehaviorSubject<Project[]>([]);
    private selectedProject: Project | undefined = undefined;
    private selectedProject$ = new BehaviorSubject<Project | undefined>(
        undefined
    );

    constructor(
        private personsService: PersonService,
        private reportsService: ReportService
    ) { }

    getProjects(): Observable<Project[]> {
        return this.projectsSubject$.asObservable();
    }

    addProject(project: Project): void {
        this.projects.push(project);
        this.projectsSubject$.next([...this.projects]);
    }

    updateProject(updatedProject: Project): void {
        const index = this.projects.findIndex(
            (p) => p.id === updatedProject.id
        );
        if (index !== -1) {
            this.projects[index] = updatedProject;
            this.projectsSubject$.next(this.projects);
        }
    }

    deleteProject(projectId: string): void {
        this.projects = this.projects.filter((p) => p.id !== projectId);
        this.projectsSubject$.next([...this.projects]);

        // remove selected project if the project to be removed is the currently selected one:
        const deletedProjectWasSelectedProject: boolean = this.projects.some((project) => project === this.selectedProject)
        if (deletedProjectWasSelectedProject === false) {
            this.selectedProject = undefined;
            this.selectedProject$.next(this.selectedProject);
        }
    }

    getProject(projectId: string): Project | undefined {
        const index = this.projects.findIndex((p) => p.id === projectId);
        return this.projects[index];
    }

    getSelectedProject(): BehaviorSubject<Project | undefined> {
        return this.selectedProject$;
    }

    selectProject(project: Project): void {
        this.selectedProject = project;
        this.selectedProject$.next(this.selectedProject);
        this.personsService.updateProjectPeople(project.people);
        this.reportsService.updateProjectReports(project.reports);
    }
}
