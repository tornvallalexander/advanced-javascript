// amazon store with inheritance

class User {
  constructor(name, active = true, cart = [], purchases = []) {
    this.name = name;
    this.active = active;
    this.cart = cart;
    this.purchases = purchases;
  }

  addItemToCart(item) {
    this.cart.push(item);
  }
  addTaxToItems() {
    this.cart = this.cart.map((item) => {
      return {
        ...item,
        price: item.price * 1.03,
      }
    });
  }
  buyItem() {
    this.purchases = [...this.cart];
  }
  emptyCart() {
    this.cart = [];
  }
}

const kim = new User('Kim');
console.log(kim);
kim.addItemToCart({ item: 'shoes', price: 100 });
console.log(kim);
kim.addTaxToItems();
console.log(kim);
kim.buyItem();
console.log(kim);
kim.emptyCart();
console.log(kim);

// honestly, inheritance is working pretty nicely here.

