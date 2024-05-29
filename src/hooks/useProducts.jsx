import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const url = "https://dummyjson.com/products";
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { isFetching, data, error } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchData,
  });

  const products = data && data.products ? data.products : [];

  return { isFetching, error, products };
};

export default useProducts;
