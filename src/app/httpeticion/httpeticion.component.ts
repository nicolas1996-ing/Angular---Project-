import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/service/gitHub.service';

@Component({
  selector: 'app-httpeticion',
  templateUrl: './httpeticion.component.html',
  styleUrls: ['./httpeticion.component.css']
})
export class HttpeticionComponent implements OnInit {

  constructor(
    private gitHubServices: GitHubService
  ) { }

  url: string = ''
  ngOnInit(): void {
    this.gitHubServices.getRepos().then((repos) => {
      this.url = repos.avatar_url
      console.log(this.url);
    })
  }

}
