import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid text-center background col-md-12">
      <p>That's an atom!</p>
      <form className="form-inline">Get atoms:
        <input type="email" className="form-control" size="50" placeholder="Email Address"/>
        <button type="button" className="btn btn-primary">Woop!</button>
      </form>
    </footer>
  )
}
export default Footer;
