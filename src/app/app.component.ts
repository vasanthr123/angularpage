import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular page';

  public name :string =" ";

  ChangeStyle  = {
    textAlign : "center",
    color : "red",
    fontSize : "30px"
  }
  ChangeHeader ={
    textAlign:"center",
    color:"blue",
    fontSize :"2rem"
  }
}


