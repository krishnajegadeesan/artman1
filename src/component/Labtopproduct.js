import React, { Component } from 'react'
import data from "../Laptops.json"
import Product from './product'
import {Link} from "react-router-dom"

class Labtopproduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products:data.labtop
             
        }
    }
    
    render() {
        const productlab=this.state.products.slice(0,4)
        const check =new Array(3).fill(1000,0,1).fill(9000,1,3).map(v=>v/2).filter(v=>v>5000)
        return (
            <div className="container my-3">
                <div className="row labtop">
                    <div className="col">
                <h2>Labtops</h2>
                </div>
                    <div className="col read">
                <Link to="/labtopc"><button className="btn btn-primary mx-auto my-auto">More</button></Link>
                {
                    console.log(check)
                }
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
export default Labtopproduct;