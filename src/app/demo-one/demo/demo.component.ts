import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  public data = [
    { id: '01', fname: 'Demo01', lname: 'Demo01' },
    { id: '02', fname: 'Demo02', lname: 'Demo02' },
    { id: '03', fname: 'Demo03', lname: 'Demo03' },
    { id: '04', fname: 'Demo04', lname: 'Demo04' },
    { id: '05', fname: 'Demo05', lname: 'Demo05' },
    { id: '06', fname: 'Demo06', lname: 'Demo06' },
    { id: '07', fname: 'Demo07', lname: 'Demo07' },
    { id: '08', fname: 'Demo08', lname: 'Demo08' },
    { id: '09', fname: 'Demo09', lname: 'Demo09' },
    { id: '10', fname: 'Demo10', lname: 'Demo10' },
  ];
  public tableHead = ['ID', 'First Name', 'Last Name', 'Actions'];

  public edit = () => {
    alert("Hello edit");
    console.log("Hello Edit");
  };
  public delete = () => {
    alert("Hello delete");
    console.log("Hello delete");
  };
  public actions = {
    'edit' :this.edit,
    'delete':this.delete
  }
  constructor() { }

  ngOnInit() {
  }



}
