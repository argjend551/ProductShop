import { FaShoppingCart } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
export default function ProductDetail(props) {
  const [added, setadded] = useState(false);
  let { product, addtoCart, showall } = props;
  let { name, price, description, origin, image, id } = product;

  return (
    <div className="productDetails">
      <FaArrowAltCircleLeft
        className="arrow"
        size="4em"
        onClick={() => showall()}
      ></FaArrowAltCircleLeft>

      <img src={image} />
      <h1>{name}</h1>
      <h1>${price}</h1>
      <p>{description}</p>
      <h3>Origin: {origin}</h3>

      <div
        className="shoppingcart"
        onClick={() => {
          addtoCart(id);
          setadded(true);
        }}
      >
        {!added ? <FaShoppingCart></FaShoppingCart> : <FaCheck></FaCheck>}
      </div>
    </div>
  );
}
