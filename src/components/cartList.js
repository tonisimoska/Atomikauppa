import React from 'react';

const CartList = ({products, setProducts, addProduct, pageHandler}) => {
  let subtotal = 0;
  products.map(e => {
    subtotal += e.data.price * e.quantity;
  });

  let discount = 0;

  if(subtotal >= 500) {
    subtotal -= subtotal * 0.1;
    discount = 10;
  }
  else if(subtotal >= 250) {
    subtotal -= subtotal * 0.04;
    discount = 4;
  }
  else if(subtotal >= 100) {
    subtotal -= subtotal * 0.025;
    discount = 2.5;
  }

  let totalItems = 0;
  products.map(e => {
    totalItems += e.quantity;
  });

  let totalText = "Total " + subtotal + "€ with " + discount + "% discount";


  if(products.length === 0) {
    return(
      <center>
        <h2>Here is your empty shopping cart of atoms</h2>
        <button className="button-primary" onClick={e => pageHandler("Home")}>Go buy some!</button>
      </center>
    )
  }
  else
  return(
    <center>
      <h2>Here is your shopping cart of atoms</h2>
      <table className="item-list">
        <tbody>
          <tr><th>Product</th><th></th><th>Price</th><th>Amount</th><th>Total</th></tr>
          {products.map(e => <CartItem key={e.data.productID} item={e.data} quantity={e.quantity} handler={addProduct}/>)}
          <tr><th>Product</th><th></th><th>Price</th><th>Total quantity {totalItems}</th><th>{totalText}</th></tr>
        </tbody>
      </table>
      <br/>
      <button className="button-primary" onClick={e => pageHandler("Home")}>Go buy some more!</button>
      <button className="button-primary" onClick={e => pageHandler("Confirm")}>Confirm order and pay me!</button>
      <button className="button-primary" onClick={e => setProducts([])}>Clear cart</button>
    </center>
  )
}

const CartItem = ({item, quantity, handler}) => {
  return (
    <tr>
      <td>
      <img className="item-image" src={item.url} alt={item.title}></img></td>
      <td><p><b>{item.title}</b></p><p>{item.Description}</p></td>
      <td>{item.price}€</td><td><button className="btn-item" onClick={e => handler(item, quantity, 0)}>-</button> {quantity} <button className="btn-item" onClick={e => handler(item, quantity, 1)}>+</button></td>
      <td>{item.price * quantity}€</td>
    </tr>
  )
}
export default CartList;
