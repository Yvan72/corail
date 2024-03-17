import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/model/client/client';
import { Observable } from 'rxjs';
import { PageDeGardeService } from 'src/app/services/page-de-garde.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit  {

  public collection$: Observable<Clients[]>;
  public myTitle: string;
  public headers: string[];
//
  constructor(private clientsService : PageDeGardeService){

    this.collection$ = this.clientsService.collection$;
    this.myTitle= "Clients";
    console.log("************ instanciation de PageListClientComponent ************")

    this.headers = [
      'ID',
      'Nom',
      'Prenom',
          ];

  }

  ngOnInit(): void {

    console.log("############## dans ngOnIniti de PageListClientComponent");

  }

}
