import React from "react";
import  ReactDOM  from "react-dom"
import App from "./App.js"
import "../src/index.css"
import {createStore} from 'redux'
import {Provider} from "react-redux"
import { reducer } from "./component/redux/reducers.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


const initialvalue={
    cartitem:localStorage.getItem("krish")?JSON.parse(localStorage.getItem("krish")):localStorage.setItem("krish",JSON.stringify([])),
    productdic:localStorage.getItem("product")?JSON.parse(localStorage.getItem("product")):localStorage.setItem("product",JSON.stringify([]))
}
var store=createStore(reducer,initialvalue)

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"))
