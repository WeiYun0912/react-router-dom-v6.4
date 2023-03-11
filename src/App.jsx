import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage, {
  loader as ProductDetailLoader,
} from "./pages/ProductDetail";
import ProductActionPage, {
  action as ProductAction,
} from "./pages/ProductAction";
import ProductsPage, { loader as ProductsLoader } from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductRoot from "./pages/ProductRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: () => {
      return "Hello World";
    },
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductRoot />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: ProductsLoader,
          },
          {
            path: ":productId",
            element: <ProductDetailPage />,
            loader: ProductDetailLoader,
          },
          {
            path: "add",
            element: <ProductActionPage />,
            action: ProductAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
