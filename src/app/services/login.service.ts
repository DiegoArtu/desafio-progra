import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeveloperModel } from '../model/developer.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  loginButton(developer: DeveloperModel){

    return this.http.post('https://beta-api.barracks.gg/v2/Auth/Authenticate',developer);
  }
}
