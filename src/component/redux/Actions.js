export const addtocart=(product)=>{
    return {
        type:"ADDTOCART",
        payload:product
    }
}
export const removecart=(index)=>{
    return {
        type:"REAMOVECART",
        payload:index
    }
}
export const product_datail=(product)=>{
    return{
        type:"PRODUCTDETAILS",
          payload:product
    }
}