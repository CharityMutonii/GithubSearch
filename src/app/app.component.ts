import { Component } from '@angular/core';
import { Repo } from './repo';
import { User } from './user';
import { ServiceService } from './service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!: User;
  repo!: Repo;
  repos = [];
  Users = [];
  searchTerm = '';

  constructor(public sec: ServiceService, http: HttpClient) { }

  onSearch(SearchTerm: string) {

    this.sec.userProfile(SearchTerm).then((result) => {
      this.user = this.sec.user
    },

      (error) => {
        console.log(error)
      }
    );
    this.sec.userRepo(SearchTerm).then((result: any) => {
      this.repo = this.sec.repo
    },
      (error: any) => {
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
    this.onSearch('CharityMutonii');
  }
}
