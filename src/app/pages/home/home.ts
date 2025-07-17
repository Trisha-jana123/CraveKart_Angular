import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  user: any;
  cartCount : number = 0;

constructor() {
  const userData = localStorage.getItem('loggedInUser');
  this.user = userData ? JSON.parse(userData) : null;
  this.updateCartCount();
}

updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  this.cartCount = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
}

  foods = [
  { image: '/food1.jpg', category: 'foody' },
  { image: '/food2.jpg', category: 'foody' },
  { image: '/food3.jpg', category: 'foody' },
  { image: '/food4.jpg', category: 'foody' },
  { image: '/food5.jpg', category: 'foody' },
];

NorthIndianFoods = [
  {  image: '/Northindian1.jpg', category: 'north-indian' },
  {  image: '/Nortindian2.jpg', category: 'north-indian' },
  {  image: '/Nortindian3.jpg', category: 'north-indian' },
  {  image: '/Northindian4.jpg', category: 'north-indian' },
  {  image: '/Northindain5.jpg', category: 'north-indian' },
];

SouthIndianFoods = [
  {  image: '/Southindian1.jpg', category: 'south-indian' },
  {  image: '/Southindian2.jpg', category: 'south-indian' },
  {  image: '/Southindian3.jpg', category: 'south-indian' },
  {  image: '/Southindian4.jpg', category: 'south-indian' },
  {  image: '/Southindian5.jpg', category: 'south-indian' },
];

ChineseFoods = [
  { image: '/Chinese1.jpg', category: 'chinese'},
  { image: '/Chinese2.jpg', category: 'chinese'},
  { image: '/Chinese3.jpg', category: 'chinese'},
  { image: '/Chinese4.jpg', category: 'chinese'},
  { image: '/Chinese5.jpg', category: 'chinese'},
]

ItalianFoods = [
  { image: '/Italian1.jpg', category: 'italian'},
  { image: '/Italian2.jpg', category: 'italian'},
  { image: '/Italian3.jpg', category: 'italian'},
  { image: '/Italian4.jpg', category: 'italian'},
  { image: '/Italian5.jpg', category: 'italian'},
]

}
