import { Component } from '@angular/core';
import { MenuItem } from './mode/menuItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chirpus-pizza';
  menuItems: MenuItem[] = [
    {
      name: 'Margherita Pizza',
      category: 'Dinner',
      price: 12,
      vegetarian: true,
      soldOut: false,
    },
    {
      name: 'Caesar Salad',
      category: 'Salad',
      price: 8,
      vegetarian: false,
      soldOut: true,
    },
    {
      name: 'Vegetable Pasta',
      category: 'Dinner',
      price: 10,
      vegetarian: true,
      soldOut: false,
    },
    {
      name: 'Grilled Chicken',
      category: 'Dinner',
      price: 15,
      vegetarian: false,
      soldOut: false,
    },
    {
      name: 'Mushroom Soup',
      category: 'Sides',
      price: 7,
      vegetarian: true,
      soldOut: true,
    },
    {
      name: 'Chicken Fingers',
      category: 'Dinner',
      price: 11,
      vegetarian: true,
      soldOut: false,
    },
  ];

  total: number = 0;

  addToOrder(price: number): void {
    this.total += price;
  }
}
