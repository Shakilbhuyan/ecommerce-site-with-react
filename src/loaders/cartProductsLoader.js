import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async ()=>{
const loadedProducts = await fetch('products.json');
const products = await loadedProducts.json();
const storedCart = getShoppingCart();

return products;
}

export default cartProductsLoader;