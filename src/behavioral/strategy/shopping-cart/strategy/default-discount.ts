/* eslint-disable @typescript-eslint/no-inferrable-types */

import { ECommerceShoppingCart } from "../entity/e-commerce-shopping-cart";
import { DiscountStrategy } from "./discount-strategy";

export class DefaultDiscount extends DiscountStrategy {
  protected discount: number = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total: number = cart.getTotal();

    if (total >= 100 && total < 200) {
      this.discount = 10;
    } else if (total >= 200 && total < 300) {
      this.discount = 20;
    } else {
      this.discount = 30;
    }
    return total - total * (this.discount / 100);
  }
}
