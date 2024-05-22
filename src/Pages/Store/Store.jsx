import Navbar from "../../Components/Navbar";
import useProducts from "../../hooks/useProducts";
import Card from "./Components/Card";
import HeaderStore from "./Sections/HeaderStore";

const Store = () => {
  const { isFetching, error, products } = useProducts();
  return (
    <>
      <Navbar />
      <HeaderStore />
      <div className="flex justify-center flex-row gap-10">
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap items-center justify-center ">
            {products &&
              products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
          </div>
        )}
        {error !== null ? <span>Error:{error.message}</span> : null}
      </div>
    </>
  );
};

export default Store;
