import React from 'react';

const ProductItem = ({data, size, buyHandler}) => {

  return (
    <div className={ "col-sm-" + size}>
      <div className="panel panel-primary">
        <div className="panel-heading" style={{backgroundColor: data.color}}>
          <b>{data.title}</b>
          <p className="float-right">{data.price}€</p>
        </div>
        <div className="panel-body"><img src={data.url} className="img-responsive width-100" alt={data.title}/></div>
        <div className="panel-footer">
        <p><b>Category: {data.category}</b></p>
        {data.Description}
        <p>In stock: <b>{data.quantity}</b> Pcs</p>
        <button className="to-cart" onClick={e => buyHandler(data, 1, 1)}><b>Buy</b></button>
        </div>
      </div>
    </div>
  )
};
export default ProductItem;
