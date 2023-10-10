import { Injectable } from '@angular/core';
import { Report } from '../interfaces/report';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReportService {
    private reports: Report[] = [];
    private reportsSubject$ = new BehaviorSubject<Report[]>([]);

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
    }

    updateProjectReports(newReports: Report[]): void {
        this.reports = newReports;
        this.reportsSubject$.next(this.reports);
    }
}
