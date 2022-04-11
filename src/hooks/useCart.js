import { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {

    let storedCart = getShoppingCart();

    let savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        let quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);

  }, [products])


  return [cart, setCart];
}

export default useCart;