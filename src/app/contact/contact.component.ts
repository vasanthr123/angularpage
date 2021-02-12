import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      Thanks for visiting our page ...
    </h2>

    <p>Contact us : abc@gmail.com</p>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
