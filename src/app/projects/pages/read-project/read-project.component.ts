import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-read-project',
  templateUrl: './read-project.component.html',
  styleUrls: ['./read-project.component.scss']
})
export class ReadProjectComponent {
  constructor(private projectService: ProjectService, private router: Router) { }

  project: Project | undefined = undefined;
  projectSubscription$!: Subscription;

  ngOnInit(): void {
    this.projectSubscription$ = this.projectService.getSelectedProject().subscribe(project => this.project = project);
  }

  onOk(): void {
    if (this.project !== undefined) {

      this.router.navigate(['projects', 'overview'])
    }
  }

  ngOnDestroy(): void {
    this.projectSubscription$.unsubscribe();
  }
}
