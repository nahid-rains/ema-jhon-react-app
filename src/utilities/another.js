const addOwn = id =>{
    let shown = getDotDb()
    let product = shown[id]
    // option:01 !
    if(!product){
        shown[id] = 1
    }else{
        const newCart = product + 1;
           shown[id] = newCart;
      
    }
    localStorage.setItem('store-cart::item-fa',JSON.stringify(shown))
}
const getDotDb = () =>{
   let shoppingCart ={};
    const storeCart = localStorage.getItem('store-cart::item-fa')
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
    }
    return shoppingCart;
}
export {
    addOwn,
   getDotDb
}