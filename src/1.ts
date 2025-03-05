import { Component } from '@angular/core';

@Component({
  selector: 'app-github-for-school',
  templateUrl: './github-for-school.component.html',
  styleUrls: ['./github-for-school.component.css']
})
export class GithubForSchoolComponent {
  projects = [];

  constructor() { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    const url = 'https://api.github.com/users/angular/repos';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.projects = data;
        console.log(this.projects);
      });
  }
}
