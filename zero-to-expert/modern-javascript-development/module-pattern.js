// we can kind of achieve the same functionality as modules with the module pattern
// allows to have private methods, and pick the ones that we want to expose - below example
// is working with the module pattern, and this is made possible with closures.

const ShoppingCart = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 294;
  const totalQuantity = 5;

  const addToCart = (item, quantity) => {
   cart.push({ item, quantity });
  }

  const orderStock = (item, quantity) => {
    console.log(`${quantity} ${item} stock has been ordered`);
  }

  return {
    addToCart,
    cart,
    totalQuantity,
    totalPrice,
  }
})();

const {
  addToCart,
  cart,
} = ShoppingCart;

addToCart('shoes', 2);
addToCart('socks', 3);
addToCart('jacket', 1);

console.log(cart);
