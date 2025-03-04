import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  save( client : Client ) : Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}`, client);
  }

  getClients() : Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }

  getClientById(id: number) : Observable<Client> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
}
