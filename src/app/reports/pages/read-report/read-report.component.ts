import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { Report } from 'src/app/shared/interfaces/report';
import { PersonService } from 'src/app/shared/services/person.service';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-read-report',
  templateUrl: './read-report.component.html',
  styleUrls: ['./read-report.component.scss']
})
export class ReadReportComponent implements OnInit, OnDestroy {
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

      this.personsSubscription$ = this.personService
          .getPeople()
          .subscribe((persons) => (this.persons = persons));
  }

  ngOnDestroy(): void {
      this.reportSubscription$.unsubscribe();
      this.personsSubscription$.unsubscribe();
  }

  onOk(): void {
    this.router.navigate(['reports', 'overview']);
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

}

