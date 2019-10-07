import React from 'react';

const Cart = ({handler, show, clickHandler, buttonNumber, buttonName, categoryState, selected}) => {

  if(show) {
    return (
      <div className="dropdown">
        <li><button  className="dropbtn" onClick={e => clickHandler(buttonNumber)}><span className="glyphicon glyphicon-shopping-cart"></span> {buttonName}</button></li>
        <div className="dropdown-content">
          <button onClick={e => handler("Cart")}>To cart</button>
        </div>
      </div>
    )
  }
  else return (
    <div className="dropdown">
      <li><button className="dropbtn" onClick={e => clickHandler(buttonNumber)}><span className="glyphicon glyphicon-shopping-cart"></span> {buttonName}</button></li>
    </div>
  )
}
export default Cart;
