import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
type FoodCategory = 'foody' | 'north-indian' | 'south-indian' | 'chinese' | 'italian';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food-order',
  standalone: false,
  templateUrl: './food-order.html',
  styleUrl: './food-order.css'
})
export class FoodOrder {

  category!: FoodCategory;
  foods: any[] = [];
  cartCount: number = 0;



 allFoods: Record<FoodCategory, { name: string; price: number; image: string }[]> = {
    'foody' : [
      { name: 'Pizza Margherita', price: 199, image: '/foody.jpg' },
      { name: 'Palak Paneer', price: 199, image: '/foody2.jpg' },
      { name: 'Onion Rings', price: 199, image: '/foody3.jpg' },
      { name: 'Chips', price: 199, image: '/foody4jpg.jpeg' },
      { name: 'Fish curry', price: 199, image: '/foody5jpg.jpeg' },
      { name: 'Sandwich', price: 199, image: '/foody6.jpg' },
      { name: 'Chicken momos', price: 199, image: '/foody7.jpg' },
      { name: 'French fries', price: 199, image: '/foody8.jpg' },
      { name: 'Chicken burger', price: 199, image: '/foody9.jpg' },
    ],

    'north-indian' : [
      { name: 'Naan and Paneer Butter Masala', price: 199, image: '/north-indian.jpg' },
      { name: 'Chole Bhatura', price: 179, image: '/north-indian1.jpg' },
      { name: 'Samosa', price: 179, image: '/north-indian2.jpg' },
      { name: 'Chicken Butter Masala with', price: 179, image: '/north-indian3.jpg' },
      { name: 'Chaat', price: 179, image: '/north-indian4.jpg' },
      { name: 'Rajma Chawal', price: 179, image: '/north-indian5.jpg' },
      { name: 'Tandoori chicken', price: 179, image: '/north-indian6.jpg' },
      { name: 'Chicken Biryani', price: 179, image: '/north-indian7.jpg' },
      { name: 'Veg Biryani', price: 179, image: '/north-indian8.jpg' },
    ],

    'south-indian' : [
      { name: 'Idli sambar', price: 199, image: '/south-indian1.jpg' },
      { name: 'Medu Vada', price: 179, image: '/south-indian2.jpg' },
      { name: 'Uttapam', price: 199, image: '/south-indian3.jpg' },
      { name: 'Appam', price: 199, image: '/south-indian4.jpg' },
      { name: 'Paniyaram', price: 199, image: '/south-indian5.jpg' },
      { name: 'Upma', price: 199, image: '/south-indian6.jpg' },
      { name: 'Coconut Rice', price: 199, image: '/south-indian7.jpg' },
      { name: 'Mysore Bonda', price: 199, image: '/south-indian8.jpg' },
      { name: 'Curd Rice', price: 199, image: '/south-indian9.jpg' },
    ],

    'chinese' : [
      { name: 'Chicken chowmein', price: 199, image: '/chinese-food1.jpg' },
      { name: 'Mongolian chicken', price: 179, image: '/chinese-food2.jpg' },
      { name: 'Dim Sums', price: 179, image: '/chinese-food3.jpg' },
      { name: 'Spring Rolls', price: 179, image: '/chinese-food4.jpg' },
      { name: 'Congee', price: 179, image: '/chinese-food5.jpg' },
      { name: 'Cantonese', price: 179, image: '/chinese-food6.jpg' },
      { name: 'Mapo Tofu', price: 179, image: '/chinese-food7.jpg' },
      { name: 'Hot Pot', price: 179, image: '/chinese-food8.jpg' },
      { name: 'Noodles', price: 179, image: '/chinese-food9.jpg' },
    ],

    'italian' : [
      { name: 'Italian cuisine', price: 199, image: '/italian-food1.jpg' },
      { name: 'Eggplant Parmesan', price: 179, image: '/italian-food2.jpg' },
      { name: 'White Sauce Pasta', price: 179, image: '/italian-food3.jpg' },
      { name: 'Fettuccine', price: 179, image: '/italian-food4.jpg' },
      { name: 'Macaroni', price: 179, image: '/italian-food5.jpg' },
      { name: 'Rigatoni', price: 179, image: '/italian-food6.jpg' },
      { name: 'Fusilli', price: 179, image: '/italian-food7.jpg' },
      { name: 'Spaghetti', price: 179, image: '/italian-food8.jpg' },
      { name: 'Lasagna', price: 179, image: '/italian-food9.jpg' },
    ],
  
  };

   constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  const routeValue = this.route.snapshot.paramMap.get('category') as FoodCategory;

  if (routeValue && this.allFoods[routeValue]) {
    this.category = routeValue;
    this.foods = this.allFoods[this.category];
  } else {
    this.foods = [];
  }

  this.updateCartCount();  
}


  addToCart(food: any) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingItem = cart.find((item: any) =>
    item.name === food.name && item.image === food.image
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...food, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  this.updateCartCount();
  // alert(`${food.name} added to cart!`);
}

  updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  this.cartCount = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
}

goToCart() {
  this.router.navigate(['/cart']);
}

logout() {
  localStorage.removeItem('loggedInUser');          
  this.router.navigate(['/login']);         
}


}