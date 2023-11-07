import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { Report } from 'src/app/shared/interfaces/report';
import { PersonService } from 'src/app/shared/services/person.service';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
    selector: 'app-edit-report',
    templateUrl: './edit-report.component.html',
    styleUrls: ['./edit-report.component.scss'],
})
export class EditReportComponent implements OnInit, OnDestroy {
    report: Report | undefined = undefined;
    private reportSubscription$!: Subscription;

    persons: Person[] = [];
    private personsSubscription$!: Subscription;

    constructor(
        private reportService: ReportService,
        private router: Router,
        public personService: PersonService
    ) {}

    ngOnInit(): void {
        this.reportSubscription$ = this.reportService
            .getSelectedReport()
            .subscribe(
                (report) => (this.report = JSON.parse(JSON.stringify(report)))
            ); // make a deep copy (in case we want to cancel, the 2-way-binding will not override the data Bugfix #59));
        console.log(this.report);

        this.personsSubscription$ = this.personService
            .getPeople()
            .subscribe((persons) => (this.persons = persons));
    }

    ngOnDestroy(): void {
        this.reportSubscription$.unsubscribe();
        this.personsSubscription$.unsubscribe();
    }

    onSubmit(form: NgForm): void {
        if (this.report !== undefined) {
            this.reportService.updateReport(this.report);
            console.log('Neuer report', this.report);

            this.router.navigate(['reports', 'overview']);
        }
    }

    checkIfPersonIsInArray(
        array: Person[] | undefined,
        person: Person
    ): boolean {
        if (array !== undefined) {
            return JSON.stringify(array).includes(JSON.stringify(person));
        } else {
            return false;
        }
    }

    toggleInvolved(person: Person): void {
        if (this.report?.involved) {
            // check if person is already involved:
            if (this.checkIfPersonIsInArray(this.report.involved, person)) {
                const newInvolved = this.report.involved.filter(
                    (involvedPerson) => person.id !== involvedPerson.id
                );
                this.report.involved = newInvolved;
            } else {
                this.report.involved.push(person);
            }
        }
    }

    toggleWitnesses(person: Person): void {
        if (this.report?.witnesses) {
            // check if person is already involved:
            if (this.checkIfPersonIsInArray(this.report.witnesses, person)) {
                const newWitnesses = this.report.witnesses.filter(
                    (witness) => witness.id !== person.id
                );
                this.report.witnesses = newWitnesses;
            } else {
                this.report?.witnesses?.push(person);
            }
        }
    }
}
