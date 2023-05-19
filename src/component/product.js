import React from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import { addtocart, product_datail } from './redux/Actions'
import {Link} from "react-router-dom"

function Product(props) {
    const addtocartt=(product)=>{
       props.addtcart(product)
    }
    const senddata=(product)=>{
        props.prodetail(product)
        console.log("click")
    }
    return (<div className="card text-center">
        <Link to="/productdetails" onClick={()=>senddata(props.product)} ><img  src={props.product.img} className="card-img-top" alt={props.product.name}></img></Link>
        <div className="card-body">
    <h5 className="card-title">{props.product.name}</h5>
    <h6>Price:Rs {props.product.price}</h6>
    <p className="card-text">{props.product.Dis}</p>
    <button  onClick={()=>addtocartt(props.product)} className="btn btn-primary">Add to cart</button>
  </div>
    </div>
    )
}
const maptostate=state=>{
    return{
        cartitem:state.cartitem
    }
}
const maptofunction=dispatch=>{
    return bindActionCreators({
        addtcart:addtocart,
        prodetail:product_datail
    },dispatch)
}
export default connect(maptostate,maptofunction)(Product);
