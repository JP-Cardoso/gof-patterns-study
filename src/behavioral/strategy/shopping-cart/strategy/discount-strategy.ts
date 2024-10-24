/* eslint-disable prettier/prettier */
import {ECommerceShoppingCart} from '../entity/e-commerce-shopping-cart';

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}