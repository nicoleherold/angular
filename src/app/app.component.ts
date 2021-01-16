import { Component } from '@angular/core';

@Component({
  selector: 'showInput',
  templateUrl: `app.component.html`,
  styleUrls: []
})
export class AppComponent {
  public title = 'ShowInput';
  public name: string;
  public value: string;
}
