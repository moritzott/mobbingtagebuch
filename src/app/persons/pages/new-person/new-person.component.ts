import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { Project } from 'src/app/shared/interfaces/project';
import { PersonService } from 'src/app/shared/services/person.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
    selector: 'app-new-person',
    templateUrl: './new-person.component.html',
    styleUrls: ['./new-person.component.scss'],
})
export class NewPersonComponent implements OnInit, OnDestroy {
    firstname: string = '';
    lastname: string = '';

    projects!: Project[];
    projectSubscription$!: Subscription;

    constructor(
        private personsService: PersonService,
        private router: Router,
        private projectService: ProjectService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.projectSubscription$ = this.projectService
            .getProjects()
            .subscribe((values) => (this.projects = values));
    }

    ngOnDestroy(): void {
        this.projectSubscription$.unsubscribe();
    }

    private createNewPerson(): void {
        const id: string = nanoid();

        const newPerson: Person = {
            id: id,
            firstname: this.firstname,
            lastname: this.lastname,
        };

        this.personsService.addPerson(newPerson);
        this.storageService.writeDataToStorage(this.projects);
    }

    onSubmit(form: NgForm): void {
        this.createNewPerson();
        form.reset();
        this.router.navigateByUrl('persons/overview');
    }
}
