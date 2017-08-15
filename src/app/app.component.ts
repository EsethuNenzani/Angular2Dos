import { Component } from '@angular/core';
import { Directive } from '@angular/core';
import {TodosComponent} from './todos/todos.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [TodosComponent]
})
export class AppComponent {
  title = 'app';
}
