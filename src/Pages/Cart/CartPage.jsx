import Navbar from "../../Components/Navbar";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <Navbar />
      <div className="flex align-center justify-center min-h-screen ">
        <div className="flex align-center  flex-col">
          <div>
            <h1 className="text-center py-5 text-[34px]">Cart Items</h1>
          </div>
          <div className="px-5 py-5  w-[1200px]">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <table className="w-full h-full ">
                <tr >
                  <th className="px-5 pb-2 border border-black border-b-2 border-0 \">Product</th>
                  <th className="px-5 pb-2 border border-black border-b-2 border-0">Unit Price</th>
                  <th className="px-5 pb-2 border border-black border-b-2 border-0">Qty</th>
                  <th className="px-5 pb-2 border border-black border-b-2 border-0">Total</th>
                </tr>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.productId} className="h-[100px]">
                      <td className="px-5 py-5 gap-5  flex  justify-center   items-center">
                        <img src={item.productImage} className="w-[80px] h-[80px]"/>
                        {item.productTitle}
                      </td>
                      <td className="px-5 py-5 text-center">RM{item.productPrice}</td>
                      <td className="px-5 py-5 text-center">{item.quantity}</td>
                      <td className="px-5 py-5 text-center">
                      RM{item.quantity * item.productPrice}
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
