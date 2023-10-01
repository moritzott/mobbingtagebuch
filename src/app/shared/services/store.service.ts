import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { BehaviorSubject, Observable } from 'rxjs';
import { nanoid } from 'nanoid';
import { Report } from '../interfaces/report';

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    /** private object to store the project state */
    private project: Project = {
        id: '',
        language: {
            code: 'de',
        },
        reports: [],
    };

    /** private subject to be subscribed as observable to components */
    private projectSubject$: BehaviorSubject<Project> =
        new BehaviorSubject<Project>({
            id: '',
            language: {
                code: 'de',
            },
            reports: [],
        });

    constructor() {}

    /**
     * Initialize a simple project
     */
    initializeSimpleProject(): void {
        const id = nanoid();
        const langCode = 'de';

        this.project = {
            id: id,
            language: {
                code: langCode,
            },
            reports: [],
        };
    }

    /**
     * Method to return the project state as observable.
     * @returns The project state as object
     */
    getProject(): Observable<Project> {
        return this.projectSubject$.asObservable();
    }

    /**
     * Method to add a report to the project.
     * @param newReport the new report
     */
    addReport(newReport: Report): void {
        this.project.reports.push(newReport);
        this.projectSubject$.next(this.project);
    }

    /**
     * Method to update a record.
     * @param updatedReport the updated report
     */
    updateReport(updatedReport: Report): void {
        const index = this.project.reports.findIndex(
            (report) => report.id === updatedReport.id
        );
        if (index !== -1) {
            this.project.reports[index] = updatedReport;
            this.projectSubject$.next(this.project);
        }
    }

    /**
     * Method to delete a single report.
     * @param id Id of the report which should be deleted
     */
    deleteReport(id: string): void {
        const index = this.project.reports.findIndex(
            (report) => report.id === id
        );
        if (index !== -1) {
            this.project.reports.splice(index, 1);
            this.projectSubject$.next(this.project);
        }
    }
}
