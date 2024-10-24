import { ECommerceShoppingCart } from "./shopping-cart/entity/e-commerce-shopping-cart";
import { NewDiscount } from "./shopping-cart/strategy/new-discount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: "produto1", price: 50 });
shoppingCart.addProduct({ name: "produto2", price: 50 });
shoppingCart.addProduct({ name: "produto2", price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
