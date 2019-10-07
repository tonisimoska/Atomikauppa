import React, {useState} from 'react';

import HeaderComponent from './components/HeaderComponent.js';
import Navbar from './components/navbar.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import CartList from './components/cartList.js';
import Confirm from './components/confirm.js';
import Products from './data/products.js';
import {hasItem} from './data/handler.js';

import './App.scss';

function App() {
  const TITLE = "Reactstore";
  const SUBTITLE = "You need some atoms don't ya?";
  const [categoryState, setCategoryState] = useState([]);
  const [page, setPage] = useState("Home");
  const [products, setProducts] = useState([]);

  const categoryHandler = event => {
    setPage("Home");
    let tempState = [...categoryState];

    if(tempState.includes(event.target.value)) {
      tempState.splice(tempState.indexOf(event.target.value), 1);
      setCategoryState(tempState);
      return;
    }
    tempState.push(event.target.value);
    setCategoryState(tempState);
  }

  const pageHandler = page => {
    setCategoryState([]);
    setPage(page);

  }
  //Remove 0, add 1
  const buyHandler = (item, quantity, type) => {
    let temp = [...products];

    if(type === 1) {
      const i = hasItem(temp, item);
      if(i >= 0) {
        temp[i].quantity++;
      }
      else {
        let data = {
          data: item,
          quantity: quantity
        }
        temp.push(data);
      }
    }
    else {
      const i = hasItem(temp, item);
      if(i >= 0 && quantity > 1) {
        temp[i].quantity--;
      }
      else {
       temp.splice(i, 1);
       console.log("Removing item");
     }
    }
    setProducts(temp);
  }

  if(page === "Home") {
    return (
        <div className="App">
          <title>Bootstrap Example</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
          <HeaderComponent title={TITLE} subtitle={SUBTITLE}/>
          <Navbar categoryState={categoryHandler} selected={categoryState} pageHandler={pageHandler}/>
          <Content data={Products} filter={categoryState} buyHandler={buyHandler}/>
          <Footer />
        </div>
    );
  }
  else if(page === "Cart") {
    return (
        <div className="App">
          <title>Bootstrap Example</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
          <HeaderComponent title={TITLE} subtitle={SUBTITLE}/>
          <Navbar categoryState={categoryHandler} selected={categoryState} pageHandler={pageHandler}/>
          <CartList products={products} setProducts={setProducts} addProduct={buyHandler} pageHandler={pageHandler}/>
          <Footer />
        </div>
    );
  }
  else if(page === "Confirm") {
    return (
        <div className="App">
          <title>Bootstrap Example</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
          <HeaderComponent title={TITLE} subtitle={SUBTITLE}/>
          <Navbar categoryState={categoryHandler} selected={categoryState} pageHandler={pageHandler}/>
          <Confirm setProducts={setProducts} setPage={setPage}/>
          <Footer />
        </div>
    );
  }
}

export default App;
