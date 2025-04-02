import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/clients/clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];
  selectedCustomer: Client;
  successMessage: String;
  errorMessage: String;
  
  constructor( private service: ClientsService, private router: Router ) {}

  ngOnInit(): void {
    this.service
      .getClients()
      .subscribe( response => this.clients = response); // resposta é a lista de clientes
  }

  newRegister(){
    this.router.navigate(['/clients-form'])
  }

  prepareDeletion( client: Client){
    this.selectedCustomer = client;
  }

  deleteClient(){
    this.service
      .delete(this.selectedCustomer)
      .subscribe( 
        response => {
          this.successMessage = 'Cliente deletado com sucesso!'
          this.ngOnInit();
        },
        error => this.errorMessage = 'Ocorreu um erro ao tentar deletar o cliente.'
      )
  }
}
