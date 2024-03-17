import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent implements OnInit, OnChanges{
@Input() public headers!: string[];
constructor(){

}
ngOnChanges(): void {

}
ngOnInit(): void {

}
}


