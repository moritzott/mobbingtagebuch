import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit, OnDestroy {
    projects!: Project[];
    projectSubscription$!: Subscription;

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.projectSubscription$ = this.projectService
            .getProjects()
            .subscribe((values) => (this.projects = values));
    }

    ngOnDestroy(): void {
        this.projectSubscription$.unsubscribe();
    }

    deleteProject(id: string): void {
        this.projectService.deleteProject(id);
    }
}
