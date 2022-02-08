import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';

  public totalVar: number = 0;

  add(a: any) {
    this.totalVar = this.totalVar + parseInt(a.value, 10);
  }
  sub(a: any) {
    this.totalVar = this.totalVar - parseInt(a.value, 10);
  }
  mul(a: any) {
    this.totalVar = this.totalVar * parseInt(a.value, 10);
  }
  div(a: any) {
    this.totalVar = this.totalVar / parseInt(a.value, 10);
  }
}
