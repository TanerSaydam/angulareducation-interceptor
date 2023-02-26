import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _http: HttpClient
  ){
    this.get();
  }

  get(){
    let options = { headers: {"Authorization": "Bearer asdsad"}};
    this._http.get("https://jsonplaceho1lder.typicode.com/todos/1").subscribe({
      next: (res)=> {},
      error: (err)=>{}
    });
  }
}
