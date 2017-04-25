import {Component} from "angular2/core";
import {VersionChildComponent} from './version_child.component';
@Component({
  selector: 'version-parent',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <version-child [majorChild]="major" [minor]="minor"></version-child>
  `,
  directives:[VersionChildComponent]
})
export class VersionParentComponent {
  major: number = 1;
  minor: number = 0;
  newMinor() {
    this.minor++;
  }
  newMajor() {
    this.major++;
    this.minor = 0;
  }
}