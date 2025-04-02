import { Injectable } from '@angular/core';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

 // private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  save( client : Client ) : Observable<Client> {
    return this.http.post<Client>('http://3.84.68.244:8080/api/clients', client);
  }

  update( client : Client ) : Observable<any> {
    return this.http.put<Client>(`http://3.84.68.244:8080/api/clients/${client.id}`, client)
  }

  getClients() : Observable<Client[]> {
    return this.http.get<Client[]>('http://3.84.68.244:8080/api/clients');
  }

  getClientById(id: number) : Observable<Client> {
    return this.http.get<any>(`http://3.84.68.244:8080/api/clients/${id}`)
  }

  delete(client: Client) : Observable<any> {
    return this.http.delete<any>(`http://3.84.68.244:8080/api/clients/${client.id}`)
  }
}
