import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  writeDataToStorage(projects: Project[]): void {
    localStorage.setItem('mbtb-data', JSON.stringify(projects));
  };

  getDataFromStorage(): undefined | Project[] {
    const data = localStorage.getItem('mbtb-data');
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return undefined;
    }
  }
}
