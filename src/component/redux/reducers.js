export const reducer=(state,action)=>{
    var cartitem=JSON.parse(localStorage.getItem("krish")).slice()
    var productdic=JSON.parse(localStorage.getItem("product")).slice()
 switch (action.type) { 
     case "ADDTOCART":
        let alreadycar=false
        cartitem.forEach(item => {
            if(item.id===action.payload.id){
                item.count++
                alreadycar=true;
               }   
        });
        if(!alreadycar){
        cartitem.push({...action.payload,count:1})
        }
         localStorage.setItem("krish",JSON.stringify(cartitem))
         return{cartitem,productdic}
        case "REAMOVECART":
         cartitem.splice(action.payload,1)
         localStorage.setItem("krish",JSON.stringify(cartitem))
         return{cartitem}
         case "PRODUCTDETAILS":
             productdic.unshift(action.payload)
             productdic.splice(1,9)
             localStorage.setItem("product",JSON.stringify(productdic))
             return{cartitem,productdic}        
     default:
        return state;
 }   
}