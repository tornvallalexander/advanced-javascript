// Amazon shopping
const user = {
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

const addItem = (item) => {
  user.cart.push(item)
}

const addTax = (itemPrice) => {
  return itemPrice * 1.03
}

const purchaseItem = () => {
  user.purchases = [...user.cart]
}

const emptyCart = () => {
  user.cart = []
}
