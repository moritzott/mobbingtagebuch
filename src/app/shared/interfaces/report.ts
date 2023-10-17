import { Time } from "@angular/common";
import { Person } from "./person";

export interface Report {
    id: string,
    date: Date,
    time: Time,
    witnesses?: Person[],
    involved?: Person[],
    proofs?: string,
    whatHappened: string,
    impacts?: string,
    reaction?: string,
    consequences?: string,
    reflexion?: string
}
