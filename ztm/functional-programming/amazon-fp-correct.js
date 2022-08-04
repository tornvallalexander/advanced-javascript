const compose = (f, g) => (...args) => f(g(...args));
// Amazon shopping
const randomUser = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
}

// Implement a cart feature
// 1. Add items to the cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

const addItemToCart = (user, item) => {
  return {
    cart: [item],
    ...user,
  }
}

const addTaxToItems = (user) => {
  return {
    cart: user.cart.map((item) => {
      return {
        ...item,
        price: item.price * 1.03,
      }
    }),
    ...user,
  }
}

const buyItem = (user) => {
  return {
    purchases: [...user.cart],
    ...user,
  }
}

const emptyCart = (user) => {
  return {
    cart: [],
    ...user,
  }
}

const purchaseItem = (...fns) => fns.reduce(compose);
const result = purchaseItem(
  addItemToCart,
  addTaxToItems,
  // buyItem,
  // emptyCart,
)(randomUser, { item: 'shoes', price: 100 });
console.log(result);