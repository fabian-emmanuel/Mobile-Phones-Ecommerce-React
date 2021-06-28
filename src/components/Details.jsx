import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

class Details extends Component {
  render() {
    return (
       <ProductConsumer>
         {value => {
           const {id, company, img, info, price, title, inCart} = value.detailProduct;
           return (
              <div className="container py-5">
                {/* title*/}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>

                  </div>
                </div>
                {/* {end of title}*/}
                {/*{product info}*/}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product"/>
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h1>model: {title}</h1>
                    <h6 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by: {company}
                    </h6>
                    <h6 className="blue-text">
                      <strong>
                        price: <span>$</span>{price}
                      </strong>
                    </h6>
                    <p className="font-weight-bold mt-3 mb-0">
                      some info about {title}:
                    </p>
                    <p className="text-muted lead">{info}</p>

                    {/*buttons*/}
                    <div>
                      <Link to="/">
                        <button className="btn-style">
                          back to products
                        </button>
                      </Link>
                      <button className="btn-style cart-btn-style"
                              disabled={!!inCart}
                              onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id)}}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
                    {/*{end of product info}*/}

              </div>
           )
         }}
       </ProductConsumer>
    );
  }
}

export default Details;