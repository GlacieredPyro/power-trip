import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _authToken: string;
  public getAuthToken() {
    return this._authToken;
  }

  constructor(private http: HttpClient) { }

  public Login(_username:string, _password:string) : Observable<HttpResponse<any>> {
    return this.http.post<any>("http://localhost:3000/auth/login", { username : _username, password: _password});
  }

  public setAuthToken(authToken: string) {
    this._authToken = authToken;
  }

}
