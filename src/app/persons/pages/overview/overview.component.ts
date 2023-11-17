import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { Project } from 'src/app/shared/interfaces/project';
import { PersonService } from 'src/app/shared/services/person.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
    persons!: Person[];
    personsSubscription$!: Subscription;

    projects!: Project[];
    projectSubscription$!: Subscription;

    selectedPerson: Person | undefined = undefined;
    selectedPersonSubscription$!: Subscription;

    constructor(
        private router: Router,
        private personService: PersonService,
        private projectService: ProjectService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.personsSubscription$ = this.personService
            .getPeople()
            .subscribe((persons) => (this.persons = persons));
        this.projectSubscription$ = this.projectService
            .getProjects()
            .subscribe((values) => (this.projects = values));
    }

    ngOnDestroy(): void {
        this.personsSubscription$.unsubscribe();
        this.projectSubscription$.unsubscribe();
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
        this.storageService.writeDataToStorage(this.projects)
        
    }

    selectPerson(person: Person): void {
        this.personService.selectPerson(person);
    }
}
