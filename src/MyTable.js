import React, { Component } from 'react';

export default class MyTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){

        fetch(`${this.props.url}`).then(r => r.json()).then((products) => {
            this.setState({products: products})
        })
    }


    render() {
        
        let items = this.state.products.map((product) => 
            <tr key={product.id}>
                <td>{product.id}</td><td>{product.name}</td><td>{product.price}</td><td>{product.stock}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => {
                    let pro = {"id": product.id, "name": product.name, "price": product.price}
                    this.props.buy(pro)
                }}>Buy</button></td>
            </tr>)

        return <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
            {items}
        </tbody>
        </table>   
    }
}
