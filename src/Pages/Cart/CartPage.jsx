import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  quantifierMinus,
  quantifierPlus,
  removeFromCart,
} from "../Store/Cart/cart";
import EmptyCart from "./section/EmptyCart";
import TotalPriceAndCheckout from "./section/TotalPriceAndCheckout";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const handleAddItem = (productId) => {
    dispatch(quantifierPlus({ productId, quantity: 1 }));
  };
  const handleMinusItem = (productId) => {
    dispatch(quantifierMinus({ productId, quantity: 1 }));
  };
  const totalCartPrice = cartItems.reduce((total,item) => {
    const itemTotalPrice = (item.quantity * item.productPrice) 
    console.log(total)
    console.log(itemTotalPrice)
    
  }) 

  return (
    <>
      <Navbar />
      <div className="flex align-center justify-center min-h-screen ">
        <div className="flex align-center flex-col">
          <div>
            <h1 className="py-10 "></h1>
          </div>
          <div className="px-5 py-5  w-[1200px]">
            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <table className="w-full h-full ">
                <thead>
                  <tr>
                    <th className="px-5 pb-2 border border-black border-b-2 border-0 \">
                      Product
                    </th>
                    <th className="px-5 pb-2 border border-black border-b-2 border-0">
                      Unit Price
                    </th>
                    <th className="px-5 pb-2 border border-black border-b-2 border-0">
                      Qty
                    </th>
                    <th className="px-5 pb-2 border border-black border-b-2 border-0">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems &&
                    cartItems.map((item) => (
                      <tr key={item.productId} className="h-[100px]">
                        <td className="px-5 py-5 gap-5  flex  justify-center   items-center">
                          <img
                            src={item.productImage}
                            className="w-[80px] h-[80px]"
                          />
                          {item.productTitle}
                        </td>
                        <td className="px-5 py-5 text-center">
                          RM{item.productPrice}
                        </td>
                        <td className="px-5 py-5 text-center">
                          <button
                            className="border p-2 m-2"
                            onClick={() => {
                              handleAddItem(item.productId);
                            }}
                          >
                            +
                          </button>
                          {item.quantity}
                          <button
                            className="border p-2 m-2"
                            onClick={() => {
                              handleMinusItem(item.productId);
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td className="px-5 py-5 text-center">
                          RM{(item.quantity * item.productPrice).toFixed(2)}
                        </td>
                        <td className="px-5 py-5 text-center">
                          <button
                            onClick={() => {
                              handleRemoveItem(item.productId);
                            }}
                          >
                            <FontAwesomeIcon icon={faX} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              
            )}
          </div>
        <TotalPriceAndCheckout total={totalCartPrice} />
        </div>
      </div>
    </>
  );
};

export default CartPage;
