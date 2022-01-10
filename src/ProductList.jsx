import { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

let cart = [];
let jsondata;
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [state, setactive] = useState(false);
  const [detailid, setDetailId] = useState(0);
  const [empty, isempty] = useState(false);
  const deleteCart = (id) => {
    cart = cart.filter((product) => product !== id);
    setProducts(products.filter((product) => cart.includes(product.id)));
    if (!cart.length) {
      isempty(true);
    }
  };
  const showall = () => {
    setProducts(jsondata);
    setactive(false);
    setDetailId(0);
  };
  const search = (event) => {
    let a = event.target.value;
    if (a == "") {
      showall();
    } else {
      let searches = products.filter((x) =>
        x.name.toLowerCase().includes(a.toLowerCase())
      );
      setProducts(searches);
    }
  };

  const addtoCart = (id) => {
    cart.push(id);
    isempty(false);
  };

  const shoppingBag = () => {
    setProducts(products.filter((product) => cart.includes(product.id)));
    setactive(true);
    if (!cart.length) {
      isempty(true);
    }
  };

  useEffect(async () => {
    let rawdata = await fetch("/src/json/producter.json");
    jsondata = await rawdata.json();
    setProducts(jsondata);
  }, []);

  return (
    <div>
      <Header shoppingBag={shoppingBag} showall={showall} state={state} />
      {!state && !detailid && (
        <div className="inputdiv">
          <input
            className="input"
            type="text"
            placeholder="Search for a product..."
            onChange={search}
          />
        </div>
      )}
      {empty && state && (
        <div className="emptycart">
          <h1>Cart is empty</h1>
        </div>
      )}
      <main>
        {!state &&
          !detailid &&
          products.map((product) => (
            <Product
              key={product.id}
              {...{
                ...product,
                setProducts,
                products,
                product,
                addtoCart,
                Cart,
                state,
                deleteCart,
                cart,
                setDetailId,
              }}
            />
          ))}
        {
          /* Show details about a product if the is detail to show */
          !state && detailid && (
            <ProductDetail
              {...{
                product: products.find((x) => x.id === detailid),
                state,
                addtoCart,
                showall,
                cart,
              }}
            />
          )
        }
        {state &&
          products.map((product) => (
            <Cart
              key={product.id}
              {...{
                ...product,
                setProducts,
                products,
                product,
                addtoCart,
                Cart,
                state,
                deleteCart,
                cart,
                setDetailId,
                showall,
                empty,
              }}
            />
          ))}
      </main>
    </div>
  );
}
