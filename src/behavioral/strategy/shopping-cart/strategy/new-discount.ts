import { ECommerceShoppingCart } from "../entity/e-commerce-shopping-cart";
import { DiscountStrategy } from "./discount-strategy";

/* eslint-disable @typescript-eslint/no-inferrable-types */
export class NewDiscount extends DiscountStrategy {
  protected discount: number = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total: number = cart.getTotal();

    if (total >= 150) this.discount = 5;

    return total - total * (this.discount / 100);
  }
}
