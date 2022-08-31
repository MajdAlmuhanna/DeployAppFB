import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-hosting';

  toggleDarkTheme(element){
        if(element.textContent === "Dark"){
          element.textContent = "Light";
        } else if( element.textContent === "Light"){
          element.textContent = "Dark";
        }
        document.body.classList.toggle('dark-theme');
      }
    }

