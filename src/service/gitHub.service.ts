import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';

// servicio 
@Injectable({
    providedIn: 'root'
})
export class GitHubService {
    constructor(
        private http: HttpClient
    ) { }

    getRepos(): Promise<any> {
        return this.http.get('https://api.github.com/users/defunkt').toPromise();
    }

}