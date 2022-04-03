const addToDb = (id) => {
    let shoppingCart = {};
    const exist = localStorage.getItem('shopping-Cart');
    if (exist) {
        shoppingCart = JSON.parse(exist);
    }
    let quantity = shoppingCart[id];
    if (quantity) {
        quantity = quantity + 1;
        shoppingCart[id] = quantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    const addtoCart = localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart));
}
const getProduct = () => {
    let shoppingCart = {};
    const exist = localStorage.getItem('shopping-Cart');
    if (exist) {
        shoppingCart = JSON.parse(exist);
    }
    return shoppingCart;
}
const removeFromDb = (id) => {
    let shoppingCart = {};
    const exist = localStorage.getItem('shopping-Cart');
    if (exist) {
        shoppingCart = JSON.parse(exist);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            const removetoCart = localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart));
        }
    }

}
const deleteFullCart = () => {
    const deleteCart = localStorage.removeItem('shopping-Cart');
}
export { addToDb, getProduct, removeFromDb, deleteFullCart };