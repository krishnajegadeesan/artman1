import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Customerreview from './Customerreview'
import Homeproduct from './Homeproduct'
import Labtopproduct from './Labtopproduct'
import { addtocart } from './redux/Actions'

function Productdetails(props) {
    console.log(props.products)
    const senddata=(product)=>{
        props.addtocart(product)
    }
    return (
        <div className="container">
            <h1 className="text-center my-4">Product details</h1>
            <div className="row prodetail">
                <div className="col-md-6 text-center">
                    <img src={props.products[0].img} alt={props.products[0].name}></img>
                </div>
                <div className="col-md-6">
                    <h2>{props.products[0].name}</h2>
                    <p>{props.products[0].Dis}</p>
                    <h4>{props.products[0].price}</h4>
                     <button onClick={()=>senddata(props.products[0])} className="btn-primary">Add to cart</button>
        
                </div>
                <Customerreview/>
            </div>
            <Labtopproduct/>
                <Homeproduct/>
        </div>
    )
}

const maptostate=(state)=>{
    return{
        products:state.productdic
    }
}
const maptofunction=(dispatch)=>{
    return bindActionCreators( {
addtocart:addtocart
    },dispatch)
}
export default connect(maptostate,maptofunction)(Productdetails)
