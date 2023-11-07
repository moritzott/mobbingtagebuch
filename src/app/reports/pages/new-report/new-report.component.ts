import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { Report } from 'src/app/shared/interfaces/report';
import { PersonService } from 'src/app/shared/services/person.service';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent implements OnInit, OnDestroy {

  persons: Person[] = [];
  private personsSubscription$!: Subscription;

  date: Date = new Date();
  time: Time = { hours: 0, minutes: 0 }
  witnesses: Person[] = [];
  involved: Person[] = [];
  proofs: string = "";
  whatHappened: string = "";
  impacts: string = "";
  reaction: string = ""
  consequences: string = ""
  reflexion: string = ""

  constructor(private reportService: ReportService, private router: Router, private personService: PersonService) { }

  ngOnInit(): void {
    this.personsSubscription$ = this.personService.getPeople().subscribe((persons) => this.persons = persons);
  }

  ngOnDestroy(): void {
    this.personsSubscription$.unsubscribe();
  }

  toggleInvolved(person: Person): void {
    // check if person is already involved:
    if(this.involved.includes(person)) {
      const newInvolved = this.involved.filter((involvedPerson) => person !== involvedPerson);
      this.involved = newInvolved;
    } else {
      this.involved.push(person);
    }
  }

  toggleWitnesses(person: Person): void { 
        // check if person is already involved:
        if(this.witnesses.includes(person)) {
          const newWitnesses = this.witnesses.filter((witness) => witness !== person);
          this.witnesses = newWitnesses;
        } else {
          this.witnesses.push(person);
        }
  }

  createNewReport(): void {
    const id = nanoid();
    const date = this.date;
    const time = this.time;
    const witnesses = this.witnesses;
    const involved = this.involved;
    const whatHappened = this.whatHappened;
    const impacts = this.impacts;
    const reaction = this.reaction;
    const consequences = this.consequences;
    const reflexion = this.reflexion;

    const newReport: Report = {
      id: id,
      date: date,
      time: time,
      witnesses: witnesses,
      involved: involved,
      whatHappened: whatHappened,
      impacts: impacts,
      reaction: reaction,
      consequences: consequences,
      reflexion: reflexion
    }

    this.reportService.addReport(newReport)

    console.log('Neuer Report', newReport)


  }


  onSubmit(form: NgForm): void {
    this.createNewReport();
    form.reset();
    this.router.navigateByUrl('reports/overview');
  }

}
