import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';


class Navbar extends Component {
  render() {
    return (
       <nav className="navbar navbar-expand-lg nav-style">
         {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk */}
         <div className="container-fluid">
           <Link to="">
             <img src={logo} alt="logo-img" className="navbar-brand logo"/>
           </Link>
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item ml-5">
                 <Link to="/" className="nav-link pt-3 mx-sm-auto">
                   <h5 className="prod-link">products</h5>
                 </Link>
                 </li>

             </ul>
           <Link to="/cart" className="nav-link">
              <button className="btn-style">
           <i className="fas fa-cart-plus"/> my cart
            </button>
             </Link>
         </div>
       </nav>
    );
  }
}


export default Navbar;