import { FaShoppingCart } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Header = (props) => {
  let { shoppingBag, showall,state} = props;
  return (
    <header>
      <div>

        <h2 className="productheader" onClick={() => showall()}>
          Products
        </h2>
        { state &&
          <FaArrowAltCircleLeft className="arrow"
            size="3em"
            onClick={() => showall()}
          ></FaArrowAltCircleLeft>
        }
        
        <FaShoppingCart
          className="Cart"
          onClick={() => shoppingBag()}
        ></FaShoppingCart>
      </div>
    </header>
  );
};
export default Header;
