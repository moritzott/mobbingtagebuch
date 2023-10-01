import { AuthToken } from "./auth-token";
import { Language } from "./language";
import { Password } from "./password";
import { Report } from "./report";

export interface Project {
    id: string,
    language: Language,
    reports: Report[],
    authToken?: AuthToken,
    password?: Password
}
