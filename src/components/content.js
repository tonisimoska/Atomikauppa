import React from 'react';
import ProductItem from "./productItem.js";
import {sort} from '../data/handler.js';

const Content = ({data, filter, buyHandler}) => {

  const layout = [6, 99];
  const size = data.length;
  var sortedData = data;

  if(filter.length > 0) {
    sortedData = sort(data, filter);
  }
  return (
    <div>
      <div className="row">
        {sortedData.map((e, index) => <ProductItem data={e} size={12 / layout[0]} key={index} buyHandler={buyHandler} />)}
      </div>
      <br/>
      <div className="row">
        <b>Showing {sortedData.length} / {size}</b>
      </div>
    </div>
  )
}
export default Content;
