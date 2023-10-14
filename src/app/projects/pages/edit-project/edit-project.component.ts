import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit, OnDestroy {

  constructor(private projectService: ProjectService, private router: Router) { }

  project: Project | undefined = undefined;
  projectSubscription$!: Subscription;

  ngOnInit(): void {
    this.projectSubscription$ = this.projectService.getSelectedProject().subscribe(project => this.project = project);
  }

  onSubmit(form: NgForm): void {
    if (this.project !== undefined) {
      this.projectService.updateProject(this.project);
      this.router.navigate(['projects', 'overview'])
    }
  }

  ngOnDestroy(): void {
    this.projectSubscription$.unsubscribe();
  }
}
