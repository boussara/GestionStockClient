import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showsidebar:boolean=false;

  onshowsidebarchange(showsidebar){

    this.showsidebar=showsidebar;

  }
}
