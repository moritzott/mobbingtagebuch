import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonService } from 'src/app/shared/services/person.service';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  persons!: Person[];
  personsSubscription$!: Subscription;

  selectedPerson: Person | undefined = undefined;
  selectedPersonSubscription$!: Subscription;
  
  constructor(private router: Router, private personService: PersonService, private projectService: ProjectService) {}
  
  ngOnInit(): void {
    this.personsSubscription$ = this.personService.getPeople().subscribe(persons => this.persons = persons)
  }
  
  ngOnDestroy(): void {
    this.personsSubscription$.unsubscribe();
  }

  editPerson(person: Person): void {
    this.personService.selectPerson(person);
    this.router.navigate(['persons', 'edit']);
  }

  readPerson(person: Person): void {
    this.personService.selectPerson(person);
    this.router.navigate(['persons', 'read']);
  }

  deletePerson(id: string): void {
    this.personService.deletePerson(id);
    this.projectService.updateProjectPeople(this.persons);
  }

  selectPerson(person: Person): void {
    this.personService.selectPerson(person);
  }

}
