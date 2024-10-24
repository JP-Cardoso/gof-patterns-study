import { IECommerceProductProtocol } from "../interface/e-commerce-product-protocol";
import { DiscountStrategy } from "../strategy/discount-strategy";

export class ECommerceShoppingCart {
  private products: Array<IECommerceProductProtocol> = [];
  private discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: Array<IECommerceProductProtocol>): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): Array<IECommerceProductProtocol> {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((acc, value) => acc + value.price, 0);
  }

  set discount(discount: DiscountStrategy) {
    this.discountStrategy = discount;
  }

  getTotalWithDiscount(): number {
    return this.discountStrategy.getDiscount(this);
  }
}
