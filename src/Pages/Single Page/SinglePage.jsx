import Navbar from "../../Components/Navbar";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import AddToCartButton from "../../Components/AddToCartButton";

const SinglePage = () => {
  const { productId } = useParams();
  const { products } = useProducts();
  const product = products.find(
    (product) => product.id.toString() === productId
  );

  return (
    <>
      <Navbar />
      {product ? (
        <div className="container flex flex-row justify-center align-center ">
          <div className="left-container p-2 w-[600px]">
            <img src={product.images} />
          </div>
          <div className="right-container p-2 w-[400px] flex flex-col ">
            <h4 className="font-bold py-5">{product.title}</h4>
            <p className="py-5">{product.description}</p>
            <span className="font-semibold py-5 ">RM {product.price}</span>
            <div className="button-section flex gap-3 py-5">
              <AddToCartButton product={product} />
              <button className=" border border-orange-400 h-[30px] w-[120px] rounded-xl ">
                Buy now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>product not found</p>
      )}
    </>
  );
};

export default SinglePage;
