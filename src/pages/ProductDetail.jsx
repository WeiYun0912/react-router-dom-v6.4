import { useLoaderData, json } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const ProductDetailPage = () => {
  const data = useLoaderData();
  return <ProductItem data={data} />;
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.productId;
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  } else {
    const data = await response.json();

    return data;
  }
};
