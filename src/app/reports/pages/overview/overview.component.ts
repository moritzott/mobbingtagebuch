import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Report } from 'src/app/shared/interfaces/report';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit, OnDestroy {
    reports!: Report[];
    reportsSubscription$!: Subscription;

    selectedReport: Report | undefined = undefined;
    selectedReportSubscription$!: Subscription;

    constructor(private reportService: ReportService, private router: Router) {}

    ngOnInit(): void {
        this.reportsSubscription$ = this.reportService
            .getReports()
            .subscribe((reports) => (this.reports = reports));
        this.selectedReportSubscription$ = this.reportService
            .getSelectedReport()
            .subscribe((report) => (this.selectedReport = report));
    }

    ngOnDestroy(): void {
        this.selectedReportSubscription$.unsubscribe();
        this.reportsSubscription$.unsubscribe();
    }

    deleteReport(id: string): void {
        this.reportService.deleteReport(id);
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
