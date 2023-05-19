import React from 'react'
import Homeproduct from './Homeproduct'
import Labtopproduct from './Labtopproduct'
import {connect} from "react-redux"

function Home({cartitem}){
    return (
        <div>
            <Labtopproduct/>
            <Homeproduct/>
            
        </div>
    )
}
const maptostate=state=>{
return{
    cartitem:state.cartitem
}
}

export default connect(maptostate)(Home);
