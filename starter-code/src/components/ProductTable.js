import React, { Component } from 'react';
import {Product} from './Product.js'

export class ProductTable extends Component {
  render () {
    var products = []
    if (this.props.inStock) {
      products = this.props.products.data.filter(product => 
        product.name.toLowerCase().includes(this.props.search.toLowerCase())
        && product.stocked === true)
    } else {
      products = this.props.products.data.filter(product => 
        product.name.toLowerCase().includes(this.props.search.toLowerCase()))
    }
    return (
      <div className="productTable container">
        <div className="tableRow row">
          <h3 className="col-6">Name</h3>
          <h3 className="col-6">Price</h3>
        </div>
        {products.map((product,i) => 
          <div className="container" key={i} style={{color:product.stocked? "black" : "red"}}>
            <Product name={product.name} price={product.price}/>
          </div>
          )}
      </div>
    )
  }
}