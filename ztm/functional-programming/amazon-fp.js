const compose = (...fns) => (...args) => {
  return fns.reduce((acc, curr) => {
    console.log("acc", acc)
    return curr(...acc)
  }, args)
}
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
  console.log(user)
  const newUser = {
    cart: [item],
    ...user,
  }
  console.log(newUser)
  return [newUser, item]
}

const addTaxToItems = (user) => {
  const newUser = {
    cart: user.cart.map((item) => {
      return {
        ...item,
        price: item.price * 1.03,
      }
    }),
    ...user,
  }
  console.log(newUser)
  return [newUser, item]
}

const buyItem = (user) => {
  const newUser = {
    purchases: [...user.cart],
    ...user,
  }
  console.log(newUser)
  return [newUser, item]
}

const emptyCart = (user) => {
  const newUser = {
    cart: [],
    ...user,
  }
  console.log(newUser)
  return newUser
}

const purchaseItem = () => compose(
  addItemToCart,
  addTaxToItems,
  buyItem,
  emptyCart,
)(randomUser, { title: "A Book", price: 10 })

purchaseItem()
