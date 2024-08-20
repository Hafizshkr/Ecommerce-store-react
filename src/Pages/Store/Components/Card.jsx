import { Link } from "react-router-dom";
import AddToCartButton from "../../../Components/AddToCartButton";

const Card = ({ product }) => {
  return (
    <>
      <div
        className="max-w-sm border overflow-hidden text-black mx-2 my-2"
        key={product.id}
      >
        <img className="w-full" src={product.thumbnail} alt={product.title} />
        <div className="px-6 py-4">
          <Link to={`/product/${product.id}`}>
            <div className="font-bold text-xl mb-2">{product.title}</div>
          </Link>
          <div className="font-semibold text-xl mb-2">RM {product.price}</div>
          <p className="text-black-700 text-base">{product.description}</p>
        </div>
        <div className=" flex justify-between px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {product.category}
          </span>
          <span>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-800 font-semibold hover:font-bold mr-2"
            >
              More Info
            </Link>
            <AddToCartButton product={product} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
