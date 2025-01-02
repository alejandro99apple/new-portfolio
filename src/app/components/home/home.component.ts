import { Component } from '@angular/core';
import { environment } from '../../../environments/environments.prod';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  base = environment.baseHref
}
