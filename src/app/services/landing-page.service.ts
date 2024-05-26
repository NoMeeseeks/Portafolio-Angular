import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Repository } from '../interfaces/repositorios.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  baseUrl = 'https://api.github.com/users/NoMeeseeks';

  private _httpClient = inject(HttpClient);

  obtenerRepositorios(): Observable<Repository[]> {
    return this._httpClient.get<Repository[]>(`${this.baseUrl}/repos`)
  }
}
