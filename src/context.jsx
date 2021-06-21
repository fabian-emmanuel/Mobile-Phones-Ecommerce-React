import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data";

const ProductContext = React.createContext('product');
//Provider
//Consumer

class ProductProvider extends Component {
  state={
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem]
    })

    this.setState(()=>{
      return {products: tempProducts}
    })
  }

  getItem = (id) => {
    return this.state.products.find(item => item.id === id);

  }

  handleDetail = (id) =>{
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct: product}
    })
  }

  addToCart = (id) =>{
    console.log('hello from addToCart')
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
