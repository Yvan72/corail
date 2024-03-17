import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent implements OnInit {
  @Input() public title: string;
  constructor() {
    this.title = 'Ohhhhh le joli title';

    console.log("==> TemplateContainer Component instaced");
  }

  ngOnInit(): void {

    console.log ("Dans ngOnInit de TemplateContainerComponent");
  }
}
