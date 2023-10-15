import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { Person } from 'src/app/shared/interfaces/person';
import { Report } from 'src/app/shared/interfaces/report';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent {

  date: Date = new Date();
  time: Time = { hours: 0, minutes: 0 }
  witnesses: Person[] = [];
  involved: Person[] = [];
  whatHappened: string = "";
  impacts: string = "";
  reaction: string = ""
  consequences: string = ""
  reflexion: string = ""

  constructor(private reportService: ReportService, private router: Router) { }

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


  }


  onSubmit(form: NgForm): void {
    this.createNewReport();
    form.reset();
    this.router.navigateByUrl('reports/overview');
  }

}
