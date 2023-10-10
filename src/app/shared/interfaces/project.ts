import { AuthToken } from "./auth-token";
import { Language } from "./language";
import { Password } from "./password";
import { Person } from "./person";
import { Report } from "./report";

export interface Project {
    id: string,
    language: Language,
    reports: Report[],
    people: Person[],
    authToken?: AuthToken,
    password?: Password
}
