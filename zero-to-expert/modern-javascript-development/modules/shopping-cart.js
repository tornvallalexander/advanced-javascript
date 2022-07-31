const cart = [];

const addToCart = (item, quantity) => {
  cart.push({ item, quantity });
}

export {
  cart,
  addToCart,
}