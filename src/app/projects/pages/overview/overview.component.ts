import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
    projects!: Project[];
    projectSubscription$!: Subscription;

    selectedProject: Project | undefined = undefined;
    selectedProjectSubscription$!: Subscription;

    constructor(private projectService: ProjectService, private router: Router) { }

    ngOnInit(): void {
        this.projectSubscription$ = this.projectService
            .getProjects()
            .subscribe((values) => (this.projects = values));

        this.selectedProjectSubscription$ = this.projectService.
            getSelectedProject()
            .subscribe((project) => this.selectedProject = project);
    }

    ngOnDestroy(): void {
        this.projectSubscription$.unsubscribe();
        this.selectedProjectSubscription$.unsubscribe();
    }

    deleteProject(id: string): void {
        this.projectService.deleteProject(id);
    }

    editProject(project: Project): void {
        this.projectService.selectProject(project);
        this.router.navigate(['projects', "edit"])
    }

    readProject(project: Project): void {
        this.projectService.selectProject(project);
        this.router.navigate(['projects', "read"])
    }

    selectProject(project: Project): void {
        this.projectService.selectProject(project);
    }
}
