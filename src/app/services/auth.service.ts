import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7039/api/Auth';

  constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<{ token: string }> {
      return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { username, password })
        .pipe(tap(res => localStorage.setItem('jwt', res.token)));
    }

  logout() {
    localStorage.removeItem('jwt');
    }
  getToken(): string | null {
    return localStorage.getItem('jwt');
    }
  isLoggedIn(): boolean {
    return !!this.getToken();
    }

}
