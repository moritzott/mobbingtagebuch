import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit, OnDestroy {

  person: Person | undefined = undefined
  personSubscription$!: Subscription;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.personSubscription$ = this.personService
      .getSelectedPerson()
      .subscribe(person => this.person = JSON.parse(JSON.stringify(person))) // make a deep copy (in case we want to cancel, the 2-way-binding will not override the data Bugfix #59)
  }

  onSubmit(form: NgForm): void {
    if (this.person !== undefined) {
      this.personService.updatePerson(this.person);
      this.router.navigate(['persons', 'overview'])
    }
  }

  ngOnDestroy(): void {
    this.personSubscription$.unsubscribe();
  }

}
