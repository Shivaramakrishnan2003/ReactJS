import React, { Component } from 'react'

export class Tea extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cart:""
    }
  }
  cartStatus=()=>{
    this.setState({
      cart:"Added to cart"
    })
  }
  render() {
    return (
      <div>
        <ul>
          <li><h3>{this.props.pastry}</h3> <p>Price: Rs.{this.props.pprice}</p></li>
        </ul>
        <button onClick={this.cartStatus}>Add to cart</button>
        <p>{this.state.cart}</p>
      </div>
    )
  }
}

export default Tea