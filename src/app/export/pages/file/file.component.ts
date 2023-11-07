import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit, OnDestroy {
  @ViewChild('downloadLink') downloadLink! : ElementRef<HTMLAnchorElement>;

  public projects: Project[] = [];
  private projectSubscription!: Subscription;

  constructor(private projectService: ProjectService) { }

  /**
   * Get all projects and save them in a variable and as downloadable file.
   */
  ngOnInit(): void {
    this.projectSubscription = this.projectService.getProjects().subscribe(projects => this.projects = projects);
    console.log('Projekte', this.projects);

    setTimeout(() => {
      const blob = new Blob([JSON.stringify(this.projects)], { type: "application/json" });
      this.downloadLink.nativeElement.download = 'projects.json';
      this.downloadLink.nativeElement.href = window.URL.createObjectURL(blob);
      this.downloadLink.nativeElement.dataset['downloadurl'] = ["application/json", this.downloadLink.nativeElement.download, this.downloadLink.nativeElement.href].join(":");
    });


  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }



}
