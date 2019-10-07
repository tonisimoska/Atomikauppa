import React from 'react';

const HeaderComponent = ({title, subtitle}) => {
  return (
    <div className="jumbotron">
      <div className="container text-center">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
export default HeaderComponent;
