import { redirect } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const ProductActionPage = () => {
  return <ProductForm />;
};

export default ProductActionPage;

export const action = async ({ request, params }) => {
  const data = await request.formData(); // 接收 Form 表單裡面的資料
  const productData = {
    title: data.get("title"),
    price: data.get("price"),
    description: data.get("description"),
  };

  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  }

  return redirect("/");
};
