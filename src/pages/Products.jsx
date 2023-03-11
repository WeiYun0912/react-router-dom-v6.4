import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const { data } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data}>
        {(loadProducts) => <ProductsList data={loadProducts} />}
      </Await>
    </Suspense>
  );
};

export default ProductsPage;

const loadProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  } else {
    const data = await response.json();

    return data.products;
  }
};

export const loader = async () => {
  return defer({
    data: loadProducts(),
  });
};
