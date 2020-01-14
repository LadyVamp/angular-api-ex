import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userName: string = "";
  responce: any;

  constructor(private http: HttpClient) {}

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((responce) => {
      this.responce = responce;
      console.log(responce);
    })
  }
}
