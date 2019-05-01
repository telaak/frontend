import React, { Component } from 'react';

class Admin extends Component {

    constructor(props){
        super(props)
        this.add = this.add.bind(this)
        this.whenFormChanges = this.whenFormChanges.bind(this)
        this.item = {name: '', price: '', stock: 1}
    }


    whenFormChanges() {
        let price = document.getElementById('price')
        let name = document.getElementById('name')
        this.item = {name: name.value, price: price.value, stock: 1}
    }

    add(){
        let configuration = {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(this.item)
        }
        fetch('http://localhost:8080/products', configuration).then((httpResponse) => {
            if(httpResponse.status === 201) {
                alert('Added!')
            }
        })
    }

    render() {
        return <div className="container landingPagePicWidth">
          <h1 className="mt-5 pt-5">Admin</h1>
          <form>
              <div className="form-group">
                  <label htmlFor="name">Product Name</label>
                  <input type="text" onChange={this.whenFormChanges} name="name" className="form-control" id="name"/>
              </div>
              <div className="form-group">
                  <label htmlFor="price">Product Price</label>
                  <input type="number" onChange={this.whenFormChanges} name="price" className="form-control" id="price"/>
              </div>
              <button type="button" className="btn btn-primary" onClick={this.add}>Add</button>
          </form>
        </div>
    }
}

export default Admin