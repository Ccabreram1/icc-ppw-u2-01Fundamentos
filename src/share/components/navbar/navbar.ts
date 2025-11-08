import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  styles: [`
    nav {
      background-color: #159;
      padding: 1rem;
    }
    a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
    }
    a.active {
      color: red;
    }
    a:hover{
      text-decoration: underline;
    }`],
})
export class Navbar { }