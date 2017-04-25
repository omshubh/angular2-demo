import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app',
    template: '<h2>My First Angular 2 App</h2><h3>Hii {{name}}</h3>'
})



export class AppComponent {
name="Om";
}