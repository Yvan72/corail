import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  public close: boolean;
  constructor()
  {
    this.close = false;
    console.log("---> UiComponnent instancié")
  }
ngOnInit(): void {
    console.log("*** Dans ngOinit de UiComponent")
  }
  public toggle(): void {
    this.close = !this.close;
  }
}
