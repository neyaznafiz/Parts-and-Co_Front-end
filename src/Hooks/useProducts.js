import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://parts-and-co-server-production.up.railway.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setLoading(false);
  }, []);

  return [products, setProducts, loading];
};

export default useProducts;
