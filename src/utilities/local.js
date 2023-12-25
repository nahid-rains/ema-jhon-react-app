const addOnLocalDb = id =>{
    let shoppingCart12 = getFromLocalDb();
    let quantItemOfItem = shoppingCart12[id]
    console.log(quantItemOfItem)
 if(!quantItemOfItem){
     shoppingCart12[id] = 1;
    }else{
        const newItem = quantItemOfItem +1;
        shoppingCart12[id] = newItem;
    }
localStorage.setItem('shop::cart',JSON.stringify(shoppingCart12))
}
const getFromLocalDb = () =>{
    let shoppingCart12;
    const storeMyCart = localStorage.getItem('shop::cart')
    if(storeMyCart){
     shoppingCart12 = JSON.parse(storeMyCart)
     }else{
        shoppingCart12 = {};
     }
 return shoppingCart12;
}

export {
    addOnLocalDb,
    getFromLocalDb
}