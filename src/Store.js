import React, { Component } from 'react';
import './App.css';
import MyTable from './MyTable';






const ShoppingCart = (props) => {
  let lis = props.data.map((item) => <li key={item.id}>{item.name}</li>)
  return <div><h2>Shopping Cart</h2><ul>{lis}</ul></div>
}

class Store extends Component {

  constructor(props){
    super(props)
    this.buy = this.buy.bind(this)
    this.state = {
      shoppingcart: []
    }
  }

  buy(product) {
    this.state.shoppingcart.push(product)
    this.setState({shoppingcart: this.state.shoppingcart})
  }

  componentWillUnmount() {
    console.log('component unmounted')
  }
  
  render() {
   return <div>
            <div className="container landingPagePicWidth">
              <h1 className="mt-5 pt-5">Apple Fanboy Store</h1>
              <h5>Items</h5>
              <MyTable url="http://localhost:8080/products" buy={this.buy}/>
              <ShoppingCart data={this.state.shoppingcart}/>
            </div>
          </div>
  }
}

export default Store;
