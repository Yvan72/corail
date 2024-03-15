import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor()
  {
    console.log("---> UiComponnent instancié")
  }
ngOnInit(): void {
    console.log("*** Dans ngOinit de UiComponent")
  }
}
