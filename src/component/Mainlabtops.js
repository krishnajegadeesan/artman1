import React, { Component } from 'react'
import data from "../Laptops.json"
import Searchcomponent from '../Searchcomponent'
import Product from './product'

 class Mainlabtops extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:data.labtop,
             input:"",
             searchproduct:[]
        }
    }
    inputhandler=(key)=>{
         this.setState({
            input:key
        })
        if(this.state.input!==""){
            const newcomponent=this.state.products.filter(x=>{
                return Object.values(x).join("").toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase())
            })

this.setState({
   searchproduct:newcomponent
})
        }
        else{
            this.setState({ searchproduct:this.state.products})
        }

    }
   render() {
       return (
        <div className="container text-center">
        <div className="title">                
            <h1 className="">Labtops</h1>
            <input type="date" onChange={e=>console.log(e.target.value)}></input>
        <Searchcomponent input={this.state.input} inputhandler={this.inputhandler}/>
        </div>
          <div className="row">
              {
                  (this.state.searchproduct.length<1?this.state.products:this.state.searchproduct).map(product=><div className="col-md-3" key={product.id}>
                      <Product product={product}/>
                  </div>)
              }

          </div>
               
           </div>
       )
   }
}
export default Mainlabtops;