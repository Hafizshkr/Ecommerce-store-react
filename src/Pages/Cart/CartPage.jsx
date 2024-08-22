import Navbar from "../../Components/Navbar";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <Navbar />
      <div className="flex align-center justify-center min-h-screen bg-red-100">
        <div className="flex align-center  flex-col">
          <div>
            <h1 className="text-center py-5 text-[34px]">Cart Items</h1>
          </div>
          <div className="px-5 py-5 h-[600px] w-[600px] bg-green-200">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <table>
                <tr>
                  <th>Items</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
                <tr>
                  {cartItems.map((item) => (
                    <tr key={item.productId}>
                      <td>{item.productTitle}</td>
                      <td>{item.productPrice}</td>
                      <td>{item.quantity}</td>
                      <td>{item.quantity * item.productPrice}</td>
                    </tr>
                  ))}
                </tr>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
