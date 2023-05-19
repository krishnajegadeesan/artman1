import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import { removecart } from './redux/Actions'

 class Cartitems extends Component {
    
     remove=(index)=>{
this.props.removecart(index)
     }
    render() {
        return (
            <div className="continer text-center">
                {this.props.Cartitem.length===0?<p>cart is empty</p>:
                <div>
                <h2>Cart Items</h2>
                <table className="mx-auto">
                <thead>
                  <tr>
                      <th>Product Name</th>
                       <th>Quantity</th>
                       <th>price</th>
                       <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.props.Cartitem.map((x,index)=><tr key={x.id}>
                    <td>{x.name}</td>
                    <td>{x.count}</td>
                    <td>{x.price*x.count}</td>
                    <td><button onClick={()=>this.remove(index)}>Remove</button></td>
                    </tr>)
                }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="2">Total</th>
                        <td>{this.props.Cartitem.reduce((a, c) => a + c.price * c.count, 0)}</td>
                        <td><button className="btn-primary">Checkout</button></td>
                    </tr>
                </tfoot>
                </table>
                </div>
    }
    
            </div>
        )
    }
}

const maptosate=state=>{
    return{
    Cartitem:state.cartitem
    }
}
const maptofunction=dispatch=>{
    return bindActionCreators({
        removecart:removecart
    },dispatch)
}
export default connect(maptosate,maptofunction)(Cartitems);