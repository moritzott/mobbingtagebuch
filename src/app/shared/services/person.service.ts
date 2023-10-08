import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PersonService {
    private people: Person[] = [];
    private peopleSubject = new BehaviorSubject<Person[]>([]);

    getPeople(): Observable<Person[]> {
        return this.peopleSubject.asObservable();
    }

    addPerson(person: Person): void {
        this.people.push(person);
        this.peopleSubject.next([...this.people]);
    }

    updatePerson(updatedPerson: Person): void {
        const index = this.people.findIndex((p) => p.id === updatedPerson.id);
        if (index !== -1) {
            this.people[index] = updatedPerson;
            this.peopleSubject.next([...this.people]);
        }
    }

    deletePerson(personId: string): void {
        this.people = this.people.filter((p) => p.id !== personId);
        this.peopleSubject.next([...this.people]);
    }

    updateProjectPeople(newPeople: Person[]): void {
        this.people = newPeople; // Aktualisiere den Personen-Array
        this.peopleSubject.next(this.people); // Aktualisiere das BehaviorSubject
    }
}
