import React from 'react';
import products from '../data/products.js';
import {getUniques} from '../data/handler.js';


function DropdownList({show, clickHandler, buttonNumber, buttonName, categoryState, selected}) {


  if(show) {
    const categories = getUniques(products);
    return(
      <div className="dropdown">
      <button className="dropbtn" onClick={e => clickHandler(buttonNumber)}>{buttonName}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        {categories.map(e => <button className={selected.includes(e) ? "dropdown-selected" : ""} value={e} onClick={e => categoryState(e)} key={e}>{e}</button>)}
      </div>
    </div>
    )
}
  else
    return(
      <div className="dropdown">
        <button className="dropbtn" onClick={e => clickHandler(buttonNumber)}>{buttonName}</button>
      </div>
    )
}
export default DropdownList;
