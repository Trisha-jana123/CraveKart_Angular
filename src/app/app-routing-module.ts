import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { FoodOrder } from './pages/food-order/food-order';
import { Cart } from './pages/cart/cart';
import { ChatbotComponent } from './pages/chatbot/chatbot';

const routes: Routes = [
  {path: "", component: Home },
  {path: 'login', component: Login},
  {path: 'signup', component: Signup},
  {path: 'order/:category', component: FoodOrder},
  {path:'cart', component: Cart},
  { path: 'chat', component: ChatbotComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
