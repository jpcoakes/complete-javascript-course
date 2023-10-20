/*
// Importing module
// import { addToCart, totalPrice, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice, tq }from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// Top-level await. You can use await without having to use an async function
// But it is blocking and won't let anything else run until its finished
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
import cloneDeep from '/.node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
