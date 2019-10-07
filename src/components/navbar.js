import React, {useState} from 'react';
import DropdownList from './DropdownList.js';
import Cart from './cart.js';
import logo from '../logo.svg';

const Navbar = ({categoryState, selected, pageHandler}) => {

  const[dropdown, setDropdown] = useState([false, false, false, false]);

  const handleClick = numOfButton => {
    let tempShow = [...dropdown];
    tempShow[numOfButton] = !tempShow[numOfButton];
    setDropdown(tempShow);
  }

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand App-logo" href="app.js"><img src={logo} alt="Logo"></img></a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><button className="dropbtn" onClick={e => pageHandler("Home")}>Home</button></li>
            <DropdownList show={dropdown[0]} clickHandler={handleClick} buttonNumber={0} buttonName="Products" categoryState={categoryState} selected={selected}/>
            <li><a href="#null">Deals</a></li>
            <li><a href="#null">Stores</a></li>
            <li><a href="#null">Contact</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><input className="input-search" type="text" placeholder="Search"></input></li>
            <Cart handler={pageHandler} show={dropdown[1]} clickHandler={handleClick} buttonNumber={1} buttonName="Cart"/>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
