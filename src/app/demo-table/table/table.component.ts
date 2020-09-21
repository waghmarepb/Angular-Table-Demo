import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input () data;
  @Input () head;
  @Input () actions; 
  
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(typeof(this.actions));  
    }, 1000);
    console.log(this.actions);

    // this.actions.edit();
  }

}
