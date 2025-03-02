import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor( 
    private service : ClientsService, 
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) {
    this.client = new Client();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service.getClientById(this.id)
        .subscribe( response => this.client = response,
          errorResponse => this.client = new Client()
        )
    }
  }

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

  returnToListScreen(){
    this.router.navigate(['/clients-list']);
  }
}
