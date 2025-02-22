import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: String[];

  constructor( private service : ClientsService ) {
    this.client = new Client();
  }

  ngOnInit(): void {}

  onSubmit(){
    this.service
      .save(this.client)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.client = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}
