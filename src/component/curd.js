import React, { Component } from 'react';

let objet=[]
export default class Curd extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         email:"",
         phone:"",
         detils:[],
      }
    } 


   submit=(e)=>{
e.preventDefault()
       if(this.state.name === "" && this.state.email ==="" && this.state.phone === ""){
           alert("enter input")
       }else{
        // console.log("save",objet.push({
        //     name:this.state.name,
        //     email:this.state.email,
        //     phone:this.state.phone,
        // }))
        objet.push({
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
        })
        this.setState({
            detils:objet,
            name:"",
            email:"",
            phone:"",
        }) 
       }
   } 
//    delete=(index)=>{
       
//        this.setState({
//            detils:objet.splice(index,1)
//        })
//    }
  render() {
    return <div>
        <form onSubmit={this.submit}>
            <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type='text'placeholder='name'></input>
            <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} type='email'placeholder='emial id'></input>
            <input value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} type="number" placeholder='phone no'></input>
            <input type='submit'></input>
            {
                objet.length > 0 &&console.log(objet.filter((v,index,a)=>a.indexOf(v)=== 0)) 
            }
        </form>
        <div style={{marginTop:"20px"}}>
            <table style={{width:"50%"}}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email id</th>
                    <th>Phonne No</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
            {
                this.state.detils.length > 0 ?this.state.detils.map((v,index)=><tr key={index}>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                    <td>{v.phone}</td>
                    <td><button>Edit</button></td>
                    {/* <td><button onClick={this.delete(index)}>Delete</button></td> */}
                </tr>):null
            }
            </tbody>
            </table>
        </div>
    </div>;
  }
}
