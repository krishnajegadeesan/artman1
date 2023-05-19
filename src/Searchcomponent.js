import React from 'react'

function Searchcomponent(props) {
    const sendvalue=(e)=>{
        props.inputhandler(e.target.value)

    }
    return (
        <div className="search my-auto">
            <input class="inputsearch" type="text" value={props.input} onChange={sendvalue} placeholder="Search..."></input>
            <i class="fa fa-search" aria-hidden="true"></i>

        </div>
    )
}

export default Searchcomponent
