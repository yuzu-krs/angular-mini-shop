import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productlist } from './productlist/productlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Productlist],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Angular Mini Shop';
  currentYear = new Date().getFullYear();
}
