// amazon store with inheritance

// inheritance in contrast to composition, defines "what it is". With composition, we define "what it has", or
// what it does to data.

// inheritance tends to lead to a lot of dependencies, where if you change something in a parent class,
// this instantly has rippling effects in all the child classes:
/*
--> Tight coupling
--> Fragile base class problem
--> Hierarchy problem

As a code base grows, the number of dependencies increases. This makes it very hard to change something in a parent
without having major changes in all the child classes. There will be edge cases where we need to change something,
but we don't want to change it in all the child classes. This is where composition makes much more sense than inheritance.
 */
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

// composition
const pipe = (...fns) => (args) => fns.reduce((acc, curr) => curr(acc), args);
function Customer(name, active = true, cart = [], purchases = []) {
  const user = {
    name,
    active,
    cart,
    purchases,
  }

  // this is extremely nice when comparing to inheritance. Gives us way more flexibility and I love the simplicity.
  return pipe(
    getHistory,
    getUsername,
  )(user);
  // return getHistory(user);
}

function getHistory(user) {
  return addMethod(
    user,
    'history',
    () => user.purchases
  );
}

function getUsername(user) {
  return addMethod(
    user,
    'username',
    () => user.name
  );
}

function addMethod(user, name, fn) {
  return {
    [name]: fn,
    ...user,
  }
}

const alex = Customer('Alex');
console.log(alex);
console.log(alex.history());
