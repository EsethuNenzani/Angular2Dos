import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos= [
      {
        text: 'Pickup kids at school'
      },
      {
        text: 'Meeting with boss'
      },
      {
        text: 'Dinner with wife'
      }
    ]
  }

  addTodo(){
    console.log(this.text);
  }

}
