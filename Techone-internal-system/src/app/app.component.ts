import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/nabar';
@Component({
  selector: 'app-root',
  template: `
  <Navbar></Navbar>
  <router-outlet></router-outlet>
  `
  
})
export class AppComponent {
  title = 'Techone-internal-system';
}
