import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { Report } from 'src/app/shared/interfaces/report';
import { ProjectService } from 'src/app/shared/services/project.service';
import { ReportService } from 'src/app/shared/services/report.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
    reports!: Report[];
    reportsSubscription$!: Subscription;

    selectedReport: Report | undefined = undefined;
    selectedReportSubscription$!: Subscription;

    projects!: Project[];
    projectSubscription$!: Subscription;

    constructor(
        private reportService: ReportService,
        private router: Router,
        private projectService: ProjectService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.reportsSubscription$ = this.reportService
            .getReports()
            .subscribe((reports) => (this.reports = reports));
        this.selectedReportSubscription$ = this.reportService
            .getSelectedReport()
            .subscribe((report) => (this.selectedReport = report));

        this.projectSubscription$ = this.projectService
            .getProjects()
            .subscribe((values) => (this.projects = values));
    }

    ngOnDestroy(): void {
        this.selectedReportSubscription$.unsubscribe();
        this.reportsSubscription$.unsubscribe();
        this.projectSubscription$.unsubscribe();
    }

    deleteReport(id: string): void {
        this.reportService.deleteReport(id);
        this.projectService.updateProjectReports(this.reports);
        this.storageService.writeDataToStorage(this.projects);
    }

    editReport(report: Report): void {
        this.reportService.selectReport(report);
        this.router.navigate(['reports', 'edit']);
    }

    readReport(report: Report): void {
        this.reportService.selectReport(report);
        this.router.navigate(['reports', 'read']);
    }
}
