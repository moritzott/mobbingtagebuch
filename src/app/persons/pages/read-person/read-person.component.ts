import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-read-person',
  templateUrl: './read-person.component.html',
  styleUrls: ['./read-person.component.css']
})
export class ReadPersonComponent implements OnInit, OnDestroy {

  person: Person | undefined = undefined
  personSubscription$!: Subscription;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.personSubscription$ = this.personService.getSelectedPerson().subscribe(person => this.person = person)
  }

  ngOnDestroy(): void {
    this.personSubscription$.unsubscribe();
  }

  onOk(): void {
    if (this.person !== undefined) {

      this.router.navigate(['persons', 'overview'])
    }
  }

}
