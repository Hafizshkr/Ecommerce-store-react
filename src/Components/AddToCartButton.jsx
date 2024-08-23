import { useDispatch } from "react-redux";
import { addToCart } from "../Pages/Store/Cart/cart";

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        productImage: product.thumbnail,
        productTitle: product.title,
        productPrice: product.price,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <button
        className=" bg-orange-400 h-[30px] w-[120px] rounded-xl text-white"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </>
  );
};

export default AddToCartButton;
