import { Project } from './../../../interfaces/project-interface';
import { Component, OnInit } from '@angular/core';
import { CommunityProjects } from 'src/datas/projekts-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = CommunityProjects;

  constructor() { }

  ngOnInit() {
  }

}
