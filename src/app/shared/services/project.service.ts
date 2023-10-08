import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[] = [];
    private projectsSubject = new BehaviorSubject<Project[]>([]);

    getProjects(): Observable<Project[]> {
        return this.projectsSubject.asObservable();
    }

    addProject(project: Project): void {
        this.projects.push(project);
        this.projectsSubject.next([...this.projects]);
    }

    updateProject(updatedProject: Project): void {
        const index = this.projects.findIndex(
            (p) => p.id === updatedProject.id
        );
        if (index !== -1) {
            this.projects[index] = updatedProject;
            this.projectsSubject.next([...this.projects]);
        }
    }

    deleteProject(projectId: string): void {
        this.projects = this.projects.filter((p) => p.id !== projectId);
        this.projectsSubject.next([...this.projects]);
    }

    getProject(projectId: string): Project | undefined {
        const index = this.projects.findIndex((p) => p.id === projectId);
        return this.projects[index];
    }
}
