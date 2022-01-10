import { FaTimes } from "react-icons/fa";

const Cart = (props) => {

    let { name, price, image, deleteCart,id} = props;
  return (
    <main>
              <div className="wrapper">
          <div className="cartproducts">
            <div className="x" onClick={() => deleteCart(id)}>
              <FaTimes></FaTimes>
            </div>
            <img src={image}></img>
            <h1>{name}</h1>
            <h4>${price}</h4>
          </div>
        </div>
     
    </main>
  );
};
export default Cart;
