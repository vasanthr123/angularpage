import { Component, OnInit } from '@angular/core';
import { DataService } from  '../data.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <div>
  <ul *ngFor = " let my of allEmp">
  <li> {{my.title}} <h2>{{my.body}}</h2> </li> 
</ul>
</div>
  `,
  styles: ['div{background:orange} '
  ]
})
export class EmployeeListComponent implements OnInit {

  public allEmp :any = [];
  constructor(private _service:DataService) { }



  get(){
    this._service.getAllEmployee().subscribe(res => this.allEmp = res)  }
  ngOnInit(): void {
    this.get();
  }


}
