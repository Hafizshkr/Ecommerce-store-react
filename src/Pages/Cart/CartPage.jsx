import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { quantifierMinus, quantifierPlus, removeFromCart } from "../Store/Cart/cart";

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
    dispatch(quantifierMinus({productId, quantity: 1}))
  }

  return (
    <>
      <Navbar />
      <div className="flex align-center justify-center min-h-screen ">
        <div className="flex align-center flex-col">
          <div>
            <h1 className="text-center py-5 text-[34px]">Your Carts</h1>
          </div>
          <div className="px-5 py-5  w-[1200px]">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
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
                            onClick={() => {
                              handleAddItem(item.productId);
                            }}
                          >
                            +
                          </button>
                          {item.quantity}
                          <button
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
        </div>
      </div>
    </>
  );
};

export default CartPage;
