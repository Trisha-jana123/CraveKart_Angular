import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cart: CartItem[] = [];
  total: number = 0;
  cartCount: number = 0; 
  feedbackText: string = '';
  feedbackSubmitted: boolean = false; 
  loggedInEmail: string = '';
 

  constructor(private router: Router) {
    this.loadCart();
    this.updateCartCount();  
  }

  loadCart() {
    const data = localStorage.getItem('cart');
    this.cart = data ? JSON.parse(data) : [];
    this.updateTotal();
  }

  increaseQty(item: CartItem) {
    item.quantity += 1;
    this.saveCart();
  }

  decreaseQty(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeItem(item);
    }
    this.saveCart();
  }

  removeItem(item: CartItem) {
    this.cart = this.cart.filter(i =>
      !(i.name === item.name && i.image === item.image)
    );
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
    this.total = 0;
    this.cartCount = 0;         // ✅ immediately reset count
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateTotal();
    this.updateCartCount();     // ✅ keeps badge live
  }

  updateTotal() {
    this.total = this.cart.reduce((sum, item) =>
      sum + (item.price || 0) * (item.quantity || 1), 0
    );
  }

  updateCartCount(): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartCount = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  submitFeedback() {
  if (this.feedbackText.trim()) {
    this.feedbackSubmitted = true;
  } else {
    alert("Please write some feedback before submitting.");
    this.feedbackSubmitted = false;
  }
}

}
