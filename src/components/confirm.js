import React, {useState} from 'react';


const Confirm = ({setProducts, setPage}) => {

  const[confirm, setConfirm] = useState(false);

  const confirmState = () => {
    setConfirm(true);
    setProducts([]);
  }

  if(!confirm) {
     return(
      <center>
      <h2>Confirm order</h2>
      <div className="col-md-2"></div>
        <div className="col-md-4">

          <form>
          <input type="text" className="form-control" size="50" placeholder="Full name" required/><br/>
          <input type="tel" className="form-control" size="50" placeholder="Phne number" required/><br/>

          </form>
        </div>
        <div className="col-md-4">
          <form>
          <input type="email" className="form-control" size="50" placeholder="Email" required/><br/>
          <button onClick={e => confirmState()} type="button" className="btn btn-primary">Order!</button>
          </form>
        </div>
      </center>
    )
  }
  else {
     return (
      <center>
        <h2>Package being delivered!</h2>
        <button className="button-primary" onClick={e => setPage("Cart")}>Back to cart!</button>
      </center>
    )
  }
}
export default Confirm;
