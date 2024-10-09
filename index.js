const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

// Server-side values

let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

// Endpoint 1: Calculate the total price of items in the cart
app.get('/cart-total', (req, res) => {
  // Get the new item price from the query parameter and parse it as a float
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);

  // Update the cumulative cart total
  cartTotal += newItemPrice;

  // Return the updated cart total as a string
  res.send(cartTotal.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
