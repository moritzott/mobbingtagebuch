import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent {

  firstname: string = ""
  lastname: string = ""

  constructor(private personsService: PersonService, private router: Router) { }

  private createNewPerson(): void {
    const id: string = nanoid();


    const newPerson: Person = {
      id: id,
      firstname: this.firstname,
      lastname: this.lastname
    };

    this.personsService.addPerson(newPerson);
  }

  onSubmit(form: NgForm): void {
    this.createNewPerson();
    form.reset();
    this.router.navigateByUrl('persons/overview');
  }

}
