import React from 'react'
import Home from './component/Home'
import Mainhomeproduct from './component/Mainhomeproduct'
import Cartitems from './component/Cartitems'
import {BrowserRouter,NavLink,Route} from "react-router-dom"
import Mainlabtops from './component/Mainlabtops'
import { connect } from 'react-redux'
import Productdetails from './component/productdetails'
import Curd from './component/curd'

function App(props) {
  const date= new Date("02-02-2022");
  date.setDate(date.getDate()+2)
    return (
       
    <BrowserRouter>
   <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <NavLink className="navbar-brand" to="/">Krishna.com</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-5">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item me-5">
            <NavLink className="nav-link" to="/Homeaccesserise">Home Applions</NavLink>
        </li>
        <li className="nav-item me-5">
            <NavLink className="nav-link" to="/labtop">Labtops</NavLink>
        </li><li className="nav-item me-5">
            <NavLink className="nav-link" to="/curd">curd</NavLink>
        </li>
        <li className="nav-item me-auto">
            <NavLink className="nav-link" to="/cart"><p className="position-relative">Cart<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.cart?props.cart.length:0}</span></p></NavLink>
        </li>
             </ul>
    </div>
  </div>
</nav>
     <Route exact path="/" component={Home}/>
        <Route exact path="/Homeaccesserise" component={Mainhomeproduct}/>
        <Route exact path="/labtop" component={Mainlabtops}/>
        <Route exact path="/cart" component={Cartitems}/>
        <Route exact path="/productdetails" component={Productdetails}/>
        <Route exact path="/curd" component={Curd}/>
        
        
        </BrowserRouter>
    )
}
const maptostate=state=>{
  return{
    cart:state.cartitem,
    product:state.productdis
  }
}
export default connect(maptostate)(App)
