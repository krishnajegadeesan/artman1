import React, { Component } from 'react'
import date from "../homeproduct.json"
import Product from './product'
import {Link} from "react-router-dom"

export default class Homeproduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:date.homeproducts
        }
    }
    
    render() {
        const productlab=this.state.products.slice(0,4)
        return (
            <div className="container">
                <div className="row home">
                    <div className="col">
                <h2>Home Applions</h2>
                </div>
                    <div className="col read">
                <Link to="/Homeaccesserise"><button className="btn btn-primary mx-auto my-auto">More</button></Link>
                </div>
                </div>
           <div className="row">
               {
                   productlab.map(product=><div className="col-md-3" key={product.id}>
                       <Product product={product}/>
                   </div>)
               }

           </div>
                
            </div>
        )
    }
}
