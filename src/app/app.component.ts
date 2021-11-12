import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  // Goal 
  /*
    CRUD operation
    - Create a Form
    - Create a Table
    - Perform some operations on Table
    - Maybe some routing.
    - Follow Best Pratices
    - Also reason about change detection / strategies
    Optional Goals
    - Lets test subrouting
    - Lets test how to have a sidesheet
    - Let implement a modal / dialog box
    - 
    /
}
