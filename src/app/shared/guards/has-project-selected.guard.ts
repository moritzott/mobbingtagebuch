import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../interfaces/project';

/**
 * This route guard check if a project is selected or not.
 * Only if a project is selected will the requests pass.
 * @param route 
 * @param state 
 * @returns true or false
 */
export const hasProjectSelectedGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const projectService = inject(ProjectService);

    const selectedProject: Project | undefined =
        projectService.getSelectedProject().value;

    if (selectedProject === undefined) {
        router.navigateByUrl('errors/no-project');
        return false;
    } else {
        return true;
    }
};
