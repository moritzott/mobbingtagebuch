import { Injectable } from '@angular/core';
import { Report } from '../interfaces/report';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReportService {
    private reports: Report[] = [];
    private reportsSubject$ = new BehaviorSubject<Report[]>([]);
    private selectedReport: Report | undefined = undefined;
    private selectedReportSubject$ = new BehaviorSubject<Report | undefined>(undefined);

    getReports(): Observable<Report[]> {
        return this.reportsSubject$.asObservable();
    }

    addReport(report: Report): void {
        this.reports.push(report);
        this.reportsSubject$.next(this.reports);
    }

    updateReport(updatedReport: Report): void {
        const index = this.reports.findIndex(
            (report) => report.id === updatedReport.id
        );
        if (index !== -1) {
            this.reports[index] = updatedReport;
            this.reportsSubject$.next([...this.reports]);
        }
    }

    deleteReport(reportId: string): void {
        this.reports = this.reports.filter((report) => report.id !== reportId);
        this.reportsSubject$.next(this.reports);

        // remove selected report if the report to be removed is the currently selected one:
        const deletedPersonWasSelectedPerson: boolean = this.reports.some((report) => report === this.selectedReport)
        if (deletedPersonWasSelectedPerson === false) {
            this.selectedReport = undefined;
            this.selectedReportSubject$.next(this.selectedReport);
        }
    }

    selectReport(report: Report): void {
        this.selectedReport = report;
        this.selectedReportSubject$.next(this.selectedReport);
    }

    getSelectedReport(): Observable<Report | undefined> {
        return this.selectedReportSubject$.asObservable();
    }

    updateProjectReports(newReports: Report[]): void {
        this.reports = newReports;
        this.reportsSubject$.next(this.reports);
    }
}
