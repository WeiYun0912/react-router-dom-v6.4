import { Outlet } from "react-router-dom";
import ProductDeferTest from "../components/ProductDeferTest";

const ProductRoot = () => {
  return (
    <>
      <ProductDeferTest />
      <Outlet />
    </>
  );
};

export default ProductRoot;
